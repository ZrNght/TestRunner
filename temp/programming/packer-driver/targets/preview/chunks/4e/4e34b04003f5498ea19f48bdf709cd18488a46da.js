System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PulseEffect;

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

      _cclegacy._RF.push({}, "3e3f3SIKGNAA6dYiBNTIgU6", "PulseEffect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PulseEffect", PulseEffect = (_dec = ccclass('PulseEffect'), _dec2 = property({
        tooltip: 'Во сколько раз увеличивать объект (например, 1.1)'
      }), _dec3 = property({
        tooltip: 'Время одного такта пульсации в секундах'
      }), _dec(_class = (_class2 = class PulseEffect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scaleFactor", _descriptor, this);

          _initializerDefineProperty(this, "duration", _descriptor2, this);
        }

        start() {
          // Сохраняем исходный размер знака
          var originalScale = this.node.scale.clone(); // Вычисляем увеличенный размер

          var targetScale = new Vec3(originalScale.x * this.scaleFactor, originalScale.y * this.scaleFactor, originalScale.z); // Запускаем бесконечную анимацию пульсации

          tween(this.node).to(this.duration, {
            scale: targetScale
          }, {
            easing: 'sineInOut'
          }).to(this.duration, {
            scale: originalScale
          }, {
            easing: 'sineInOut'
          }).union().repeatForever().start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleFactor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e34b04003f5498ea19f48bdf709cd18488a46da.js.map