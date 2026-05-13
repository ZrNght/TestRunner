import { _decorator, Component, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PulseEffect')
export class PulseEffect extends Component {

    @property({ tooltip: 'Во сколько раз увеличивать объект (например, 1.1)' })
    public scaleFactor: number = 1.1;

    @property({ tooltip: 'Время одного такта пульсации в секундах' })
    public duration: number = 0.4;

    start() {
        // Сохраняем исходный размер знака
        const originalScale = this.node.scale.clone();
        
        // Вычисляем увеличенный размер
        const targetScale = new Vec3(
            originalScale.x * this.scaleFactor,
            originalScale.y * this.scaleFactor,
            originalScale.z
        );

        // Запускаем бесконечную анимацию пульсации
        tween(this.node)
            .to(this.duration, { scale: targetScale }, { easing: 'sineInOut' })
            .to(this.duration, { scale: originalScale }, { easing: 'sineInOut' })
            .union()
            .repeatForever()
            .start();
    }
}