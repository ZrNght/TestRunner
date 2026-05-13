System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EnemyController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55955CJ/tNCArH/fyKwDKsu", "EnemyController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec2 = property({
        tooltip: 'Скорость перемещения врага'
      }), _dec(_class = (_class2 = class EnemyController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          this.targetPosition = null;
        }

        // Метод, который будет вызывать спавнер, чтобы передать врагу координаты цели
        setTarget(targetPos) {
          this.targetPosition = targetPos;
        }

        update(deltaTime) {
          if (!this.targetPosition) return; // Текущая позиция врага в мире

          var currentPos = this.node.worldPosition; // Вычисляем вектор направления к цели

          var direction = new Vec3();
          Vec3.subtract(direction, this.targetPosition, currentPos); // Узнаем расстояние до цели

          var distance = direction.length(); // Если враг дошел до точки (расстояние меньше 5 пикселей), удаляем его

          if (distance < 5) {
            this.node.destroy();
            return;
          } // Нормализуем вектор (делаем длину равной 1) и умножаем на скорость


          direction.normalize();
          direction.multiplyScalar(this.speed * deltaTime); // Перемещаем врага

          var newPos = new Vec3();
          Vec3.add(newPos, currentPos, direction);
          this.node.worldPosition = newPos;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0568abd03e49a6c28af06d03600f51e3a786a7c.js.map