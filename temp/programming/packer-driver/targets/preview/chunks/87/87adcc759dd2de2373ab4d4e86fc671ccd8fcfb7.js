System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, tween, Vec3, input, Input, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PlayerController;

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
      Animation = _cc.Animation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c97d7dPHohFpqQm6wh1pFaE", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'tween', 'Vec3', 'input', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: Animation,
        tooltip: 'Перетащи сюда компонент Animation персонажа'
      }), _dec3 = property({
        tooltip: 'Высота прыжка в пикселях'
      }), _dec4 = property({
        tooltip: 'Время всего прыжка (взлет + падение) в секундах'
      }), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "anim", _descriptor, this);

          _initializerDefineProperty(this, "jumpHeight", _descriptor2, this);

          _initializerDefineProperty(this, "jumpDuration", _descriptor3, this);

          this.isStarted = false;
          this.isJumping = false;
          this.groundY = 0;
        }

        start() {
          // По умолчанию играем Idle
          this.anim.play('Char_Idle'); // Запоминаем изначальную позицию Y как уровень земли

          this.groundY = this.node.position.y;
        }

        startGame() {
          if (this.isStarted) return;
          this.isStarted = true;
          this.anim.play('Char_Run'); // ИСПРАВЛЕНИЕ: Используем глобальный ввод вместо клика по сцене

          input.on(Input.EventType.TOUCH_START, this.jump, this);
        }

        jump() {
          if (!this.isStarted || this.isJumping) return;
          this.isJumping = true;
          this.anim.play('Char_Jump');
          var currentPos = this.node.position;
          var upPos = new Vec3(currentPos.x, this.groundY + this.jumpHeight, currentPos.z);
          var downPos = new Vec3(currentPos.x, this.groundY, currentPos.z);
          var halfDuration = this.jumpDuration / 2;
          tween(this.node).to(halfDuration, {
            position: upPos
          }, {
            easing: 'sineOut'
          }).to(halfDuration, {
            position: downPos
          }, {
            easing: 'sineIn'
          }).call(() => {
            this.isJumping = false;
            this.anim.play('Char_Run');
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jumpDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87adcc759dd2de2373ab4d4e86fc671ccd8fcfb7.js.map