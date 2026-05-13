System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, Size, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, ResponsiveContentSize;

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
      view = _cc.view;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a5a4BPjiVNh7Dn2iJbTe1t", "ResponsSize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'Size', 'UITransform']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ResponsiveContentSize", ResponsiveContentSize = (_dec = ccclass('ResponsiveContentSize'), _dec2 = requireComponent(UITransform), _dec3 = property({
        group: 'Landscape'
      }), _dec4 = property({
        group: 'Portrait'
      }), _dec(_class = _dec2(_class = (_class2 = class ResponsiveContentSize extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "landscapeSize", _descriptor, this);

          _initializerDefineProperty(this, "portraitSize", _descriptor2, this);

          this.transformComponent = null;
        }

        onLoad() {
          this.transformComponent = this.getComponent(UITransform);
        }

        start() {
          this.updateSize();
          view.on('canvas-resize', this.updateSize, this);
        }

        updateSize() {
          if (!this.transformComponent) return;
          var screenSize = view.getVisibleSize();
          var isLandscape = screenSize.width > screenSize.height;

          if (isLandscape) {
            this.transformComponent.setContentSize(this.landscapeSize);
          } else {
            this.transformComponent.setContentSize(this.portraitSize);
          }
        }

        onDestroy() {
          view.off('canvas-resize', this.updateSize, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(750, 140);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "portraitSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(400, 140);
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe1ccd84ed40623bb9adf780fd923f4f757156f2.js.map