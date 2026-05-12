System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BackgroundScroll;

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

      _cclegacy._RF.push({}, "a05f1k/yNVLPqC+tRKAKWK2", "BGLoop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackgroundScroll", BackgroundScroll = (_dec = ccclass('BackgroundScroll'), _dec2 = property(Vec3), _dec3 = property(Vec3), _dec(_class = (_class2 = class BackgroundScroll extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spawnPoint", _descriptor, this);

          _initializerDefineProperty(this, "despawnPoint", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);

          this._range = 0;
        }

        start() {
          this._range = Math.abs(this.spawnPoint.x - this.despawnPoint.x);
        }

        update(dt) {
          var pos = this.node.getPosition();
          pos.x -= this.speed * dt;

          if (pos.x <= this.despawnPoint.x) {
            pos.x += this._range;
          }

          this.node.setPosition(pos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spawnPoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(4000, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "despawnPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(-4000, 0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c7e7e851f159503970f5fcbd38ae516a96aa473.js.map