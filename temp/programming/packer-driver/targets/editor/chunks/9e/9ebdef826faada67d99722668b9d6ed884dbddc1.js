System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UIOpacity, director, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HealthManager;

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
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      director = _cc.director;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0cf84BLs5NHpIIPHZ95DwG", "HealthManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UIOpacity', 'director', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HealthManager", HealthManager = (_dec = ccclass('HealthManager'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class HealthManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hearts", _descriptor, this);

          _initializerDefineProperty(this, "failOverlay", _descriptor2, this);

          _initializerDefineProperty(this, "failSprite", _descriptor3, this);

          this.currentHealth = 0;
        }

        start() {
          this.currentHealth = this.hearts.length;
          if (this.failOverlay) this.failOverlay.active = false;
          if (this.failSprite) this.failSprite.active = false;
        }

        loseHeart() {
          if (this.currentHealth > 0) {
            this.currentHealth--;
            let targetHeart = this.hearts[this.currentHealth];
            let uiOpacity = targetHeart.getComponent(UIOpacity) || targetHeart.addComponent(UIOpacity);
            uiOpacity.opacity = 100;

            if (this.currentHealth <= 0) {
              this.gameOver();
            }
          }
        }

        gameOver() {
          director.pause();
          setTimeout(() => {
            this.showFailScreen();
          }, 500);
        }

        showFailScreen() {
          // Сначала показываем черный экран
          if (this.failOverlay) {
            this.failOverlay.active = true;

            if (this.failOverlay.parent) {
              this.failOverlay.setSiblingIndex(this.failOverlay.parent.children.length - 1);
            }

            let overlayOpacity = this.failOverlay.getComponent(UIOpacity) || this.failOverlay.addComponent(UIOpacity);
            overlayOpacity.opacity = 0;
            let time1 = 0;
            let duration1 = 0.5;
            let interval1 = setInterval(() => {
              time1 += 0.016;
              let progress = Math.min(time1 / duration1, 1);

              if (overlayOpacity && overlayOpacity.isValid) {
                overlayOpacity.opacity = progress * 200;
              }

              if (progress >= 1) clearInterval(interval1);
            }, 16);
          } // Затем показываем спрайт Fail, чтобы он был поверх черного экрана


          if (this.failSprite) {
            this.failSprite.active = true;

            if (this.failSprite.parent) {
              // Вытаскиваем надпись еще выше, поверх черного фона
              this.failSprite.setSiblingIndex(this.failSprite.parent.children.length - 1);
            }

            this.failSprite.setScale(new Vec3(0, 0, 0));
            let time2 = 0;
            let duration2 = 0.6;
            const s = 1.70158;
            let interval2 = setInterval(() => {
              time2 += 0.016;
              let t = Math.min(time2 / duration2, 1);
              let t1 = t - 1;
              let progress = t1 * t1 * ((s + 1) * t1 + s) + 1;

              if (this.failSprite && this.failSprite.isValid) {
                this.failSprite.setScale(new Vec3(progress, progress, progress));
              }

              if (t >= 1) clearInterval(interval2);
            }, 16);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hearts", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "failOverlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "failSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ebdef826faada67d99722668b9d6ed884dbddc1.js.map