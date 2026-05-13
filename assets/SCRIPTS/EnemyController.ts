import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {
    @property({ tooltip: 'Скорость перемещения врага' })
    public speed: number = 150;

    private targetPosition: Vec3 | null = null;

    // Метод, который будет вызывать спавнер, чтобы передать врагу координаты цели
    public setTarget(targetPos: Vec3) {
        this.targetPosition = targetPos;
    }

    update(deltaTime: number) {
        if (!this.targetPosition) return;

        // Текущая позиция врага в мире
        let currentPos = this.node.worldPosition;

        // Вычисляем вектор направления к цели
        let direction = new Vec3();
        Vec3.subtract(direction, this.targetPosition, currentPos);
        
        // Узнаем расстояние до цели
        let distance = direction.length();

        // Если враг дошел до точки (расстояние меньше 5 пикселей), удаляем его
        if (distance < 5) {
            this.node.destroy();
            return;
        }

        // Нормализуем вектор (делаем длину равной 1) и умножаем на скорость
        direction.normalize();
        direction.multiplyScalar(this.speed * deltaTime);

        // Перемещаем врага
        let newPos = new Vec3();
        Vec3.add(newPos, currentPos, direction);
        this.node.worldPosition = newPos;
    }
}