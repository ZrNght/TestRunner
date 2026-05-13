System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameStart;

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
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f9818JZmdPQLAXr+9UfV2Y", "GameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec2 = property({
        type: Node,
        tooltip: 'Нода стартового текста (Tap to start...)'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Нода курсора (рука)'
      }), _dec(_class = (_class2 = class GameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "startTextNode", _descriptor, this);

          _initializerDefineProperty(this, "cursorNode", _descriptor2, this);
        }

        start() {
          // Подписываемся на глобальное событие касания/клика по экрану
          input.on(Input.EventType.TOUCH_START, this.onFirstTouch, this);
        }

        onFirstTouch(event) {
          // 1. Прячем стартовый текст, если он назначен
          if (this.startTextNode) {
            this.startTextNode.active = false;
          } // 2. Прячем курсор, если он назначен


          if (this.cursorNode) {
            this.cursorNode.active = false;
          } // ЗДЕСЬ МОЖНО ДОБАВИТЬ ЗАПУСК САМОЙ ИГРЫ
          // например: this.startGame();
          // 3. Отписываемся от события, чтобы этот код сработал только ОДИН раз


          input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
        }

        onDestroy() {
          // Хорошая практика: всегда отписываться от событий при уничтожении объекта,
          // чтобы избежать ошибок, если игрок выйдет в меню до первого клика
          input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startTextNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cursorNode", [_dec3], {
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
//# sourceMappingURL=31a8d874d166cd5c7ad97d0bb36269d8a343362e.js.map