System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, Widget, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, requireComponent, ResponsiveWidget;

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
      Widget = _cc.Widget;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "042f4o+YaBPa4wY7pWyJ8Z8", "ResponsWidget", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'Widget', 'Vec3']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ResponsiveWidget", ResponsiveWidget = (_dec = ccclass('ResponsiveWidget'), _dec2 = requireComponent(Widget), _dec3 = property({
        group: 'Landscape'
      }), _dec4 = property({
        group: 'Landscape'
      }), _dec5 = property({
        group: 'Landscape'
      }), _dec6 = property({
        group: 'Portrait'
      }), _dec7 = property({
        group: 'Portrait'
      }), _dec8 = property({
        group: 'Portrait'
      }), _dec(_class = _dec2(_class = (_class2 = class ResponsiveWidget extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "landscapeRight", _descriptor, this);

          _initializerDefineProperty(this, "landscapeBottom", _descriptor2, this);

          _initializerDefineProperty(this, "landscapeScale", _descriptor3, this);

          _initializerDefineProperty(this, "portraitRight", _descriptor4, this);

          _initializerDefineProperty(this, "portraitBottom", _descriptor5, this);

          _initializerDefineProperty(this, "portraitScale", _descriptor6, this);

          this.widgetComponent = null;
        }

        onLoad() {
          this.widgetComponent = this.getComponent(Widget);
        }

        start() {
          this.updateWidget();
          view.on('canvas-resize', this.updateWidget, this);
        }

        updateWidget() {
          if (!this.widgetComponent) return;
          const screenSize = view.getVisibleSize();
          const isLandscape = screenSize.width > screenSize.height;
          this.widgetComponent.isAlignRight = true;
          this.widgetComponent.isAlignBottom = true;

          if (isLandscape) {
            this.widgetComponent.right = this.landscapeRight;
            this.widgetComponent.bottom = this.landscapeBottom;
            this.node.setScale(this.landscapeScale);
          } else {
            this.widgetComponent.right = this.portraitRight;
            this.widgetComponent.bottom = this.portraitBottom;
            this.node.setScale(this.portraitScale);
          }

          this.widgetComponent.updateAlignment();
        }

        onDestroy() {
          view.off('canvas-resize', this.updateWidget, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeRight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscapeBottom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "landscapeScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "portraitRight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "portraitBottom", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "portraitScale", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7084725a25cc883e2f70ea5403b2857f672c0a67.js.map