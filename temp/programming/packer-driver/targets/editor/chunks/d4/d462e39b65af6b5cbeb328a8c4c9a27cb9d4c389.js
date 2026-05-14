System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, tween, Vec3, Node, UIOpacity, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScoreManager;

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
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7d04uo6vhLTJDDpWWxugdU", "ScoreManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'tween', 'Vec3', 'Node', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreManager", ScoreManager = (_dec = ccclass('ScoreManager'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class ScoreManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "complimentContainer", _descriptor, this);

          this.scoreLabel = null;
          this.currentScore = 0;
          this.originalScale = new Vec3();
          this.originalPositions = new Map();
        }

        start() {
          this.scoreLabel = this.getComponent(Label);
          this.originalScale = this.node.scale.clone();
          this.updateScoreDisplay();

          if (this.complimentContainer) {
            for (let child of this.complimentContainer.children) {
              this.originalPositions.set(child, child.getPosition().clone());
              let uiOpacity = child.getComponent(UIOpacity);

              if (!uiOpacity) {
                uiOpacity = child.addComponent(UIOpacity);
              }

              uiOpacity.opacity = 0;
            }
          }
        }

        addScore(min, max) {
          const amount = Math.floor(Math.random() * (max - min + 1)) + min;
          this.currentScore += amount;
          this.updateScoreDisplay();
          this.playPopAnimation();
          this.showRandomCompliment();
        }

        updateScoreDisplay() {
          if (this.scoreLabel) {
            this.scoreLabel.string = `$${this.currentScore}`;
          }
        }

        playPopAnimation() {
          tween(this.node).stop().to(0.1, {
            scale: new Vec3(this.originalScale.x * 1.3, this.originalScale.y * 1.3, this.originalScale.z)
          }).to(0.1, {
            scale: this.originalScale
          }).start();
        }

        showRandomCompliment() {
          if (Math.random() > 0.3) return;
          if (!this.complimentContainer || this.complimentContainer.children.length === 0) return;
          const children = this.complimentContainer.children;
          const randomIndex = Math.floor(Math.random() * children.length);
          const complimentNode = children[randomIndex];
          let uiOpacity = complimentNode.getComponent(UIOpacity);

          if (!uiOpacity) {
            uiOpacity = complimentNode.addComponent(UIOpacity);
          }

          tween(complimentNode).stop();
          tween(uiOpacity).stop();
          const originalPos = this.originalPositions.get(complimentNode) || new Vec3(0, 0, 0);
          complimentNode.setPosition(originalPos.clone());
          complimentNode.setScale(new Vec3(0.5, 0.5, 0.5));
          uiOpacity.opacity = 255;
          tween(complimentNode).to(0.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }, {
            easing: 'backOut'
          }).to(0.1, {
            scale: new Vec3(1.0, 1.0, 1.0)
          }).delay(0.5).by(0.3, {
            position: new Vec3(0, 50, 0)
          }).start();
          tween(uiOpacity).delay(0.8).to(0.3, {
            opacity: 0
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "complimentContainer", [_dec2], {
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
//# sourceMappingURL=d462e39b65af6b5cbeb328a8c4c9a27cb9d4c389.js.map