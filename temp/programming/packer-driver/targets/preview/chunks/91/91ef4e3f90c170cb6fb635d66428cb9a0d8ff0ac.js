System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, Animation, Sprite, Color, tween, UIOpacity, HealthManager, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PlayerHitbox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHealthManager(extras) {
    _reporterNs.report("HealthManager", "./HealthManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      HealthManager = _unresolved_2.HealthManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6dc3dmfH5xFi5GviG7zMWuD", "PlayerHitbox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Animation', 'Sprite', 'Color', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerHitbox", PlayerHitbox = (_dec = ccclass('PlayerHitbox'), _dec2 = property({
        type: _crd && HealthManager === void 0 ? (_reportPossibleCrUseOfHealthManager({
          error: Error()
        }), HealthManager) : HealthManager
      }), _dec(_class = (_class2 = class PlayerHitbox extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "invincibilityDuration", _descriptor, this);

          _initializerDefineProperty(this, "healthManager", _descriptor2, this);

          this.isInvincible = false;
          this.playerAnimation = null;
          this.playerSprite = null;
          this.uiOpacity = null;
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          this.playerAnimation = this.getComponent(Animation);
          this.playerSprite = this.getComponent(Sprite);
          this.uiOpacity = this.getComponent(UIOpacity) || this.addComponent(UIOpacity);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (this.isInvincible) return;

          if (otherCollider.node.name === 'Enemy-001' || otherCollider.node.name === 'Konus') {
            this.takeDamage();
          }
        }

        takeDamage() {
          this.isInvincible = true;

          if (this.healthManager) {
            this.healthManager.loseHeart();
          }

          if (this.playerAnimation) {
            this.playerAnimation.play('Char_Hit');
          }

          this.playDamageEffect();
          this.scheduleOnce(() => {
            this.isInvincible = false;
            if (this.playerSprite) this.playerSprite.color = Color.WHITE;
            if (this.uiOpacity) this.uiOpacity.opacity = 255;

            if (this.playerAnimation) {
              this.playerAnimation.play('Char_Run');
            }
          }, this.invincibilityDuration);
        }

        playDamageEffect() {
          if (!this.playerSprite) return;
          var normalColor = new Color(255, 255, 255, 255);
          var damageColor = new Color(255, 100, 100, 255);
          tween(this.playerSprite).to(0.1, {
            color: damageColor
          }).to(0.1, {
            color: normalColor
          }).union().repeat(Math.floor(this.invincibilityDuration / 0.2)).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "invincibilityDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "healthManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91ef4e3f90c170cb6fb635d66428cb9a0d8ff0ac.js.map