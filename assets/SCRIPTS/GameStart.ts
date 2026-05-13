import { _decorator, Component, Node, input, Input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStart')
export class GameStart extends Component {

    @property({ type: Node, tooltip: 'Нода стартового текста (Tap to start...)' })
    public startTextNode: Node | null = null;

    @property({ type: Node, tooltip: 'Нода курсора (рука)' })
    public cursorNode: Node | null = null;

    start() {
        // Подписываемся на глобальное событие касания/клика по экрану
        input.on(Input.EventType.TOUCH_START, this.onFirstTouch, this);
    }

    onFirstTouch(event: EventTouch) {
        // 1. Прячем стартовый текст, если он назначен
        if (this.startTextNode) {
            this.startTextNode.active = false;
        }

        // 2. Прячем курсор, если он назначен
        if (this.cursorNode) {
            this.cursorNode.active = false;
        }

        // ЗДЕСЬ МОЖНО ДОБАВИТЬ ЗАПУСК САМОЙ ИГРЫ
        // например: this.startGame();

        // 3. Отписываемся от события, чтобы этот код сработал только ОДИН раз
        input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
    }

    onDestroy() {
        // Хорошая практика: всегда отписываться от событий при уничтожении объекта,
        // чтобы избежать ошибок, если игрок выйдет в меню до первого клика
        input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
    }
}