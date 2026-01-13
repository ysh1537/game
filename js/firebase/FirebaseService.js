/**
 * Firebase 설정 파일
 * 무료 Spark 플랜 사용 (과금 없음)
 */

// Firebase SDK 모듈 import (CDN 방식)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyAg4uO1lNdtmVEKbmP_li2t6eoxiyevHQE",
    authDomain: "multiverse-creature-lab.firebaseapp.com",
    projectId: "multiverse-creature-lab",
    storageBucket: "multiverse-creature-lab.firebasestorage.app",
    messagingSenderId: "369154000180",
    appId: "1:369154000180:web:666df574a3e47cbaa1d161",
    measurementId: "G-LCYYVNEH2N"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Firebase 서비스 클래스
 */
class FirebaseService {
    constructor() {
        this.currentUser = null;
        this.isInitialized = false;
    }

    /**
     * 초기화 - 인증 상태 리스너 등록
     */
    init(onUserChanged) {
        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.isInitialized = true;
            if (onUserChanged) onUserChanged(user);
        });
    }

    /**
     * Google 로그인
     */
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('[Firebase] Google 로그인 성공:', result.user.displayName);
            return { success: true, user: result.user };
        } catch (error) {
            console.error('[Firebase] 로그인 실패:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 로그아웃
     */
    async logout() {
        try {
            await signOut(auth);
            console.log('[Firebase] 로그아웃 완료');
            return { success: true };
        } catch (error) {
            console.error('[Firebase] 로그아웃 실패:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 게임 데이터 저장 (클라우드)
     */
    async saveGameData(gameData) {
        if (!this.currentUser) {
            console.warn('[Firebase] 로그인 필요');
            return { success: false, error: '로그인 필요' };
        }

        try {
            const userDocRef = doc(db, 'users', this.currentUser.uid);
            await setDoc(userDocRef, {
                ...gameData,
                displayName: this.currentUser.displayName,
                email: this.currentUser.email,
                lastSaved: new Date().toISOString()
            }, { merge: true });
            console.log('[Firebase] 게임 데이터 저장 완료');
            return { success: true };
        } catch (error) {
            console.error('[Firebase] 저장 실패:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 게임 데이터 로드 (클라우드)
     */
    async loadGameData() {
        if (!this.currentUser) {
            console.warn('[Firebase] 로그인 필요');
            return { success: false, error: '로그인 필요' };
        }

        try {
            const userDocRef = doc(db, 'users', this.currentUser.uid);
            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {
                console.log('[Firebase] 게임 데이터 로드 완료');
                return { success: true, data: docSnap.data() };
            } else {
                console.log('[Firebase] 저장된 데이터 없음');
                return { success: true, data: null };
            }
        } catch (error) {
            console.error('[Firebase] 로드 실패:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 랭킹 업데이트
     */
    async updateRanking(score, creatureCount) {
        if (!this.currentUser) return { success: false };

        try {
            const rankingRef = doc(db, 'rankings', this.currentUser.uid);
            await setDoc(rankingRef, {
                displayName: this.currentUser.displayName,
                score: score,
                creatureCount: creatureCount,
                updatedAt: new Date().toISOString()
            });
            return { success: true };
        } catch (error) {
            console.error('[Firebase] 랭킹 업데이트 실패:', error);
            return { success: false };
        }
    }

    /**
     * 랭킹 조회 (상위 20명)
     */
    async getRankings() {
        try {
            const rankingsRef = collection(db, 'rankings');
            const q = query(rankingsRef, orderBy('score', 'desc'), limit(20));
            const querySnapshot = await getDocs(q);

            const rankings = [];
            querySnapshot.forEach((doc) => {
                rankings.push({ id: doc.id, ...doc.data() });
            });

            return { success: true, rankings };
        } catch (error) {
            console.error('[Firebase] 랭킹 조회 실패:', error);
            return { success: false, rankings: [] };
        }
    }

    /**
     * 현재 유저 정보
     */
    getCurrentUser() {
        return this.currentUser;
    }

    /**
     * 로그인 상태 확인
     */
    isLoggedIn() {
        return !!this.currentUser;
    }
}

// 싱글톤 인스턴스
const firebaseService = new FirebaseService();

// Make Global for Vanilla JS Managers to access
window.firebaseService = firebaseService;
window.auth = auth;
window.db = db;

export { firebaseService, auth, db };
