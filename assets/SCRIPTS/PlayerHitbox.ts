import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
const { ccclass } = _decorator;

@ccclass('PlayerHitbox')
export class PlayerHitbox extends Component {

    start() {
        // Получаем компонент коллайдера, который висит на игроке
        let collider = this.getComponent(Collider2D);
        if (collider) {
            // Подписываемся на событие НАЧАЛА пересечения хитбоксов
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    // Эта функция вызывается автоматически при касании
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
        // Проверяем, с кем именно мы столкнулись (например, по имени ноды)
        // Если вы не меняли имя ноды врага в префабе, оно так и осталось 'Enemy'
        if (otherCollider.node.name === 'Enemy') {
            console.log('Игрок получил урон от врага!');
            
            // Логика при столкновении:
            // Например, уничтожаем врага, который в нас врезался
            otherCollider.node.destroy();
            
            // Здесь можно вызвать функцию уменьшения здоровья игрока,
            // обновления UI сердечек, или проигрывания звука удара.
        }
    }
}