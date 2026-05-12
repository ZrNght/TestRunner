System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CursorPulse;

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1afe0A/O+ROJLfS/76MwkVD", "Pulse", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CursorPulse", CursorPulse = (_dec = ccclass('CursorPulse'), _dec2 = property({
        tooltip: 'Во сколько раз курсор будет увеличиваться'
      }), _dec3 = property({
        tooltip: 'Время одного расширения/сужения в секундах'
      }), _dec(_class = (_class2 = class CursorPulse extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scaleFactor", _descriptor, this);

          _initializerDefineProperty(this, "duration", _descriptor2, this);
        }

        start() {
          // Сохраняем изначальный масштаб ноды
          var originalScale = this.node.scale.clone(); // Вычисляем целевой (увеличенный) масштаб

          var targetScale = new Vec3(originalScale.x * this.scaleFactor, originalScale.y * this.scaleFactor, originalScale.z); // Запускаем бесконечную анимацию пульсации

          tween(this.node) // Плавное увеличение
          .to(this.duration, {
            scale: targetScale
          }, {
            easing: 'sineInOut'
          }) // Плавное возвращение к исходному размеру
          .to(this.duration, {
            scale: originalScale
          }, {
            easing: 'sineInOut'
          }) // Объединяем шаги
          .union() // Повторяем бесконечно
          .repeatForever().start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleFactor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8d9e84b1a7106e0e3b29c45bec1dd5dd65f4cc3.js.map