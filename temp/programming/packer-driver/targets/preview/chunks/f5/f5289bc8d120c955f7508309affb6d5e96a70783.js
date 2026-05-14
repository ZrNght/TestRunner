System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TutorialCursor;

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

      _cclegacy._RF.push({}, "dd993wSFCVMeYJo55BXgI0A", "TutorialCursor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TutorialCursor", TutorialCursor = (_dec = ccclass('TutorialCursor'), _dec(_class = (_class2 = class TutorialCursor extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scaleFactor", _descriptor, this);

          _initializerDefineProperty(this, "duration", _descriptor2, this);

          this.originalScale = new Vec3();
          this.intervalId = 0;
          this.elapsedTime = 0;
        }

        start() {
          this.originalScale = this.node.scale.clone();
          this.intervalId = setInterval(() => {
            this.elapsedTime += 0.016;
            var progress = (1 - Math.cos(this.elapsedTime * Math.PI / this.duration)) / 2;
            var currentScale = 1 + (this.scaleFactor - 1) * progress;

            if (this.node && this.node.isValid) {
              this.node.setScale(this.originalScale.x * currentScale, this.originalScale.y * currentScale, this.originalScale.z);
            }
          }, 16);
        }

        onDestroy() {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
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
//# sourceMappingURL=f5289bc8d120c955f7508309affb6d5e96a70783.js.map