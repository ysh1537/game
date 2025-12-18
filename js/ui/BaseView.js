/**
 * @class BaseView
 * @description 모든 탭별 View 클래스의 기본이 되는 추상 클래스입니다.
 */
export default class BaseView {
    constructor(game, uiManager) {
        this.game = game;
        this.uiManager = uiManager;
        this.ui = uiManager.ui; // 편의를 위해 UI 요소 참조 보관

        this.init();
    }

    /**
     * @description 초기 설정 및 이벤트 바인딩 (자식 클래스에서 오버라이드)
     */
    init() { }

    /**
     * @description 화면을 렌더링합니다 (자식 클래스에서 오버라이드)
     */
    render() { }

    /**
     * @description 로그를 추가합니다.
     */
    addLog(msg, type) {
        this.uiManager.addLog(msg, type);
    }
}
