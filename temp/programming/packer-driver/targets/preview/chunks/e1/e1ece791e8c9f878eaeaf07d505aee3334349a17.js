System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Collider2D, Contact2DType, director, input, Input, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TutorialAvoid;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ef7WxvElEk7YLWHlIbhVs", "TutorialAvoid", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'director', 'input', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TutorialAvoid", TutorialAvoid = (_dec = ccclass('TutorialAvoid'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class TutorialAvoid extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tutorialUI", _descriptor, this);

          _initializerDefineProperty(this, "cursorSprite", _descriptor2, this);

          this.isTutorialDone = false;
        }

        start() {
          if (this.tutorialUI) {
            this.tutorialUI.active = false;
          }

          if (this.cursorSprite) {
            this.cursorSprite.active = false;
          }

          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (this.isTutorialDone) return;

          if (otherCollider.node.name === 'Enemy-001' || otherCollider.node.name === 'Konus') {
            this.isTutorialDone = true;
            this.showTutorial();
          }
        }

        showTutorial() {
          if (this.tutorialUI) {
            this.tutorialUI.active = true;
          }

          if (this.cursorSprite) {
            this.cursorSprite.active = true;
          }

          this.scheduleOnce(() => {
            director.pause();
          }, 0);
          input.on(Input.EventType.TOUCH_START, this.hideTutorial, this);
        }

        hideTutorial() {
          input.off(Input.EventType.TOUCH_START, this.hideTutorial, this);
          director.resume();

          if (this.tutorialUI) {
            this.tutorialUI.active = false;
          }

          if (this.cursorSprite) {
            this.cursorSprite.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cursorSprite", [_dec3], {
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
//# sourceMappingURL=e1ece791e8c9f878eaeaf07d505aee3334349a17.js.map