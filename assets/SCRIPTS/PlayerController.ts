import { _decorator, Component, Animation, tween, Vec3, input, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    @property({ type: Animation, tooltip: 'Перетащи сюда компонент Animation персонажа' })
    anim: Animation = null;

    @property({ tooltip: 'Высота прыжка в пикселях' })
    jumpHeight: number = 200; 

    @property({ tooltip: 'Время всего прыжка (взлет + падение) в секундах' })
    jumpDuration: number = 0.6; 

    private isStarted: boolean = false;
    private isJumping: boolean = false;
    private groundY: number = 0;

    start() {
        // По умолчанию играем Idle
        this.anim.play('Char_Idle');
        
        // Запоминаем изначальную позицию Y как уровень земли
        this.groundY = this.node.position.y;
    }

    public startGame() {
        if (this.isStarted) return;
        
        this.isStarted = true;
        this.anim.play('Char_Run');
        
        // ИСПРАВЛЕНИЕ: Используем глобальный ввод вместо клика по сцене
        input.on(Input.EventType.TOUCH_START, this.jump, this);
    }

    jump() {
        if (!this.isStarted || this.isJumping) return;

        this.isJumping = true;
        this.anim.play('Char_Jump');

        const currentPos = this.node.position;
        const upPos = new Vec3(currentPos.x, this.groundY + this.jumpHeight, currentPos.z);
        const downPos = new Vec3(currentPos.x, this.groundY, currentPos.z);

        const halfDuration = this.jumpDuration / 2;

        tween(this.node)
            .to(halfDuration, { position: upPos }, { easing: 'sineOut' })
            .to(halfDuration, { position: downPos }, { easing: 'sineIn' })
            .call(() => {
                this.isJumping = false;
                this.anim.play('Char_Run');
            })
            .start();
    }
}