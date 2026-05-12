System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, Label, UITransform, Size, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, requireComponent, ResponsiveTextSettings;

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
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cea1bMAtRlOK72h2cPJkAap", "ResponsiveText", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'Label', 'UITransform', 'Size']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator); // Автоматически добавляем нужные компоненты, если их вдруг нет

      _export("ResponsiveTextSettings", ResponsiveTextSettings = (_dec = ccclass('ResponsiveTextSettings'), _dec2 = requireComponent(Label), _dec3 = requireComponent(UITransform), _dec4 = property({
        group: 'Landscape (Альбомная)',
        tooltip: 'Размер шрифта'
      }), _dec5 = property({
        group: 'Landscape (Альбомная)',
        tooltip: 'Размер контейнера (Ширина, Высота)'
      }), _dec6 = property({
        group: 'Portrait (Портретная)',
        tooltip: 'Размер шрифта'
      }), _dec7 = property({
        group: 'Portrait (Портретная)',
        tooltip: 'Размер контейнера (Ширина, Высота)'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class ResponsiveTextSettings extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "landscapeFontSize", _descriptor, this);

          _initializerDefineProperty(this, "landscapeContentSize", _descriptor2, this);

          _initializerDefineProperty(this, "portraitFontSize", _descriptor3, this);

          _initializerDefineProperty(this, "portraitContentSize", _descriptor4, this);

          // Внутренние ссылки на компоненты
          this.labelComponent = null;
          this.transformComponent = null;
        }

        onLoad() {
          // Получаем компоненты при загрузке
          this.labelComponent = this.getComponent(Label);
          this.transformComponent = this.getComponent(UITransform);
        }

        start() {
          this.updateLayout(); // Подписываемся на изменение размера окна

          view.on('canvas-resize', this.updateLayout, this);
        }

        updateLayout() {
          if (!this.labelComponent || !this.transformComponent) return;
          const screenSize = view.getVisibleSize();
          const isLandscape = screenSize.width > screenSize.height;

          if (isLandscape) {
            // Применяем настройки для альбомной ориентации
            this.labelComponent.fontSize = this.landscapeFontSize; // Обновляем межстрочный интервал, чтобы текст не обрезался (делаем его чуть больше шрифта)

            this.labelComponent.lineHeight = this.landscapeFontSize * 1.2;
            this.transformComponent.setContentSize(this.landscapeContentSize);
          } else {
            // Применяем настройки для портретной ориентации
            this.labelComponent.fontSize = this.portraitFontSize;
            this.labelComponent.lineHeight = this.portraitFontSize * 1.2;
            this.transformComponent.setContentSize(this.portraitContentSize);
          }
        }

        onDestroy() {
          view.off('canvas-resize', this.updateLayout, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeFontSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscapeContentSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Size(500, 100);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portraitFontSize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 40;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "portraitContentSize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Size(300, 150);
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=627655bf3015657c4159d484b782274926929688.js.map