System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, director, PlayerController, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      director = _cc.director;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "771edHWpvJNLI9ynvUKKyHC", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventTouch', 'Animation', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
        error: Error()
      }), PlayerController) : PlayerController), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);
        }

        onLoad() {
          GameManager.isGameStarted = false;
          input.on(Input.EventType.TOUCH_START, this.onFirstTouch, this);
        }

        start() {
          this.setFrozenState(true);
        }

        onFirstTouch(event) {
          if (!GameManager.isGameStarted) {
            GameManager.isGameStarted = true;
            this.setFrozenState(false);

            if (this.player) {
              this.player.startGame();
            }

            input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
          }
        }

        setFrozenState(freeze) {
          var scene = director.getScene();

          if (scene) {
            for (var i = 0; i < scene.children.length; i++) {
              this.toggleRecursive(scene.children[i], freeze);
            }
          }
        }

        toggleRecursive(node, freeze) {
          if (this.player && node === this.player.node) return;
          if (node === this.node) return;
          var comps = node.getComponents(Component);

          for (var i = 0; i < comps.length; i++) {
            var comp = comps[i];
            if (!comp) continue;
            var compName = comp.constructor.name;

            if (compName === 'Animation' || compName === 'SkeletalAnimation') {
              if (freeze) {
                comp.pause();
              } else {
                comp.resume();
              }
            } else if (comp.update && typeof comp.update === 'function') {
              if (compName !== 'Sprite' && compName !== 'Label' && compName !== 'Graphics' && compName !== 'UITransform' && compName !== 'Widget') {
                comp.enabled = !freeze;
              }
            }
          }

          for (var _i = 0; _i < node.children.length; _i++) {
            this.toggleRecursive(node.children[_i], freeze);
          }
        }

      }, _class3.isGameStarted = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
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
//# sourceMappingURL=354e87b8ad7a858cb815d59530cebe180d8df47f.js.map