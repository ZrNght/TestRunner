System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, Vec3, Size, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, requireComponent, ResponsiveCursorSettings;

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
      Vec3 = _cc.Vec3;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4878egQQ6hKtr5afe/Rdz1x", "ResponsiveCursor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'Vec3', 'Size', 'UITransform']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ResponsiveCursorSettings", ResponsiveCursorSettings = (_dec = ccclass('ResponsiveCursorSettings'), _dec2 = requireComponent(UITransform), _dec3 = property({
        group: 'Landscape (Альбомная)',
        tooltip: 'Позиция (X, Y, Z)'
      }), _dec4 = property({
        group: 'Landscape (Альбомная)',
        tooltip: 'Размер (Ширина, Высота)'
      }), _dec5 = property({
        group: 'Portrait (Портретная)',
        tooltip: 'Позиция (X, Y, Z)'
      }), _dec6 = property({
        group: 'Portrait (Портретная)',
        tooltip: 'Размер (Ширина, Высота)'
      }), _dec(_class = _dec2(_class = (_class2 = class ResponsiveCursorSettings extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "landscapePosition", _descriptor, this);

          _initializerDefineProperty(this, "landscapeSize", _descriptor2, this);

          _initializerDefineProperty(this, "portraitPosition", _descriptor3, this);

          _initializerDefineProperty(this, "portraitSize", _descriptor4, this);

          this.transformComponent = null;
        }

        onLoad() {
          this.transformComponent = this.getComponent(UITransform);
        }

        start() {
          this.updateLayout(); // Подписываемся на поворот/изменение размера экрана

          view.on('canvas-resize', this.updateLayout, this);
        }

        updateLayout() {
          if (!this.transformComponent) return;
          const screenSize = view.getVisibleSize();
          const isLandscape = screenSize.width > screenSize.height;

          if (isLandscape) {
            // Устанавливаем позицию и размер для альбомной
            this.node.setPosition(this.landscapePosition);
            this.transformComponent.setContentSize(this.landscapeSize);
          } else {
            // Устанавливаем позицию и размер для портретной
            this.node.setPosition(this.portraitPosition);
            this.transformComponent.setContentSize(this.portraitSize);
          }
        }

        onDestroy() {
          view.off('canvas-resize', this.updateLayout, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapePosition", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, -50, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscapeSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Size(150, 150);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portraitPosition", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, -100, 0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "portraitSize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Size(100, 100);
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=021b7bef8e90977d5cf3c5b8d410ac60ecae829b.js.map