import EventEmitter from '../utils/EventEmitter.js';

export const DATE_COURSES = {
    CAFE: { id: 'cafe', name: '카페 데이트', costType: 'energy', cost: 50, resonance: 30, desc: '소소한 대화와 커피 한 잔' },
    PARK: { id: 'park', name: '놀이공원', costType: 'gem', cost: 100, resonance: 150, desc: '즐거운 추억 만들기' },
    DINNER: { id: 'dinner', name: '프라이빗 디너', costType: 'real', cost: 11000, resonance: 1000, desc: '단 둘만의 럭셔리 타임' }
};

export default class DateManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
    }

    getCourses() {
        return Object.values(DATE_COURSES);
    }

    getAvailableCourses() {
        return Object.values(DATE_COURSES);
    }

    async goOnDate(courseId, creatureInstanceId) { // Fixed Order: courseId, creatureId handled by UI? 
        // Logic in View was: goOnDate(course.id, targetId)
        // Check argument order

        const course = Object.values(DATE_COURSES).find(c => c.id === courseId);
        if (!course) return;

        const creature = this.game.creatureManager.getCreatureById(creatureInstanceId);
        if (!creature) {
            alert("대상 크리처를 찾을 수 없습니다.");
            return;
        }

        // 1. Payment / Resource Deduction
        if (course.costType === 'real' || course.costType === 'cash') {
            // Trigger Payment
            const success = await this.game.paymentManager.requestPayment({
                id: `date_${courseId}`,
                name: `[데이트] ${course.name}`,
                price: course.cost, // 11000
                type: 'date_instant',
                amount: 1
            });
            if (!success) return;
        } else {
            // Resource
            if (course.costType === 'energy') {
                if (!this.game.resourceManager.spendEnergy(course.cost)) {
                    alert('에너지가 부족합니다!');
                    return;
                }
            } else if (course.costType === 'gem') {
                if (!this.game.resourceManager.spendGem(course.cost)) {
                    alert('젬이 부족합니다!');
                    return;
                }
            }
        }

        // 2. Logic Effect
        this.game.creatureManager.increaseAffection(creatureInstanceId, course.resonance);

        // 3. Trigger Event (Cinematic)
        this.emit('date:started', { creature, course });

        // 4. Visual Cutscene
        this.playDateCutscene(creature, course);
    }

    playDateCutscene(creature, course) {
        const ego = creature.def.ego || 'Normal';
        const lines = this.getEgoMonologue(ego, course.id);
        const diff = course.resonance;

        // Visual Cutscene
        if (this.game.playCutscene) {
            this.game.playCutscene(creature, 'date', {
                text: lines,
                subText: `Resonance +${diff} (현재: ${creature.affection || 0})`
            });
        } else {
            alert(`[데이트 결과]\n${creature.def.name}: "${lines}"\n(Resonance +${diff})`);
        }

        // Trigger UI refresh
        if (window.updateLobbyCharacter) window.updateLobbyCharacter();
    }

    getEgoMonologue(ego, courseId) {
        let monologue = "";

        if (courseId === 'dinner') {
            if (ego === 'Warlord') monologue = "이런 사치스러운 곳은 처음이군... 하지만 네가 준비했다면, 나쁘지 않아.";
            else if (ego === 'Devotion') monologue = "당신과 단둘이... 꿈만 같아요. 이 시간이 영원했으면...";
            else if (ego === 'Star') monologue = "와아! 여기 예약 엄청 힘든 곳이잖아? 역시 디렉터님 최고! 인증샷 찍자!";
            else monologue = "훌륭한 식사군요. 당신과의 대화는 언제나 즐겁습니다.";
        } else if (courseId === 'park') {
            if (ego === 'Warlord') monologue = "이딴 애들 장난 같은... 윽, 뭐? 롤러코스터? 타주면 될 거 아냐!";
            else if (ego === 'Star') monologue = "꺅! 저거 타자 저거! 나 무서운 거 잘 탄단 말이야!";
            else monologue = "놀이공원이라... 가끔은 이렇게 시끄러운 곳도 괜찮네.";
        } else { // cafe
            monologue = "커피 향이 좋네요. 잠시 쉬었다 가요.";
        }
        return monologue;
    }
}
