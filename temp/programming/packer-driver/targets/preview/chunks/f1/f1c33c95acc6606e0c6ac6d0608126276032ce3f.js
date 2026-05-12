System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, EnvironmentScroll;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c49a6+cMsNHFLx3ghny7e1Z", "EnvironmentLoop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnvironmentScroll", EnvironmentScroll = (_dec = ccclass('EnvironmentScroll'), _dec(_class = (_class2 = class EnvironmentScroll extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "spawnX", _descriptor2, this);

          _initializerDefineProperty(this, "despawnX", _descriptor3, this);
        }

        update(dt) {
          var pos = this.node.getPosition();
          pos.x -= this.speed * dt;

          if (pos.x <= this.despawnX) {
            pos.x = this.spawnX;
          }

          this.node.setPosition(pos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spawnX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "despawnX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1500;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1c33c95acc6606e0c6ac6d0608126276032ce3f.js.map