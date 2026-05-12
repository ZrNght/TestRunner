import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CursorPulse')
export class CursorPulse extends Component {

    @property({ tooltip: 'Во сколько раз курсор будет увеличиваться' })
    public scaleFactor: number = 1.2;

    @property({ tooltip: 'Время одного расширения/сужения в секундах' })
    public duration: number = 0.5;

    start() {
        // Сохраняем изначальный масштаб ноды
        const originalScale = this.node.scale.clone();
        
        // Вычисляем целевой (увеличенный) масштаб
        const targetScale = new Vec3(
            originalScale.x * this.scaleFactor,
            originalScale.y * this.scaleFactor,
            originalScale.z
        );

        // Запускаем бесконечную анимацию пульсации
        tween(this.node)
            // Плавное увеличение
            .to(this.duration, { scale: targetScale }, { easing: 'sineInOut' })
            // Плавное возвращение к исходному размеру
            .to(this.duration, { scale: originalScale }, { easing: 'sineInOut' })
            // Объединяем шаги
            .union()
            // Повторяем бесконечно
            .repeatForever()
            .start();
    }
}