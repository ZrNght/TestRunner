System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, _dec, _class, _crd, ccclass, PlayerHitbox;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6dc3dmfH5xFi5GviG7zMWuD", "PlayerHitbox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass
      } = _decorator);

      _export("PlayerHitbox", PlayerHitbox = (_dec = ccclass('PlayerHitbox'), _dec(_class = class PlayerHitbox extends Component {
        start() {
          // Получаем компонент коллайдера, который висит на игроке
          let collider = this.getComponent(Collider2D);

          if (collider) {
            // Подписываемся на событие НАЧАЛА пересечения хитбоксов
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        } // Эта функция вызывается автоматически при касании


        onBeginContact(selfCollider, otherCollider, contact) {
          // Проверяем, с кем именно мы столкнулись (например, по имени ноды)
          // Если вы не меняли имя ноды врага в префабе, оно так и осталось 'Enemy'
          if (otherCollider.node.name === 'Enemy') {
            console.log('Игрок получил урон от врага!'); // Логика при столкновении:
            // Например, уничтожаем врага, который в нас врезался

            otherCollider.node.destroy(); // Здесь можно вызвать функцию уменьшения здоровья игрока,
            // обновления UI сердечек, или проигрывания звука удара.
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91ef4e3f90c170cb6fb635d66428cb9a0d8ff0ac.js.map