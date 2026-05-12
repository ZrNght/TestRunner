import { _decorator, Component, view, Label, UITransform, Size } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

// Автоматически добавляем нужные компоненты, если их вдруг нет
@ccclass('ResponsiveTextSettings')
@requireComponent(Label)
@requireComponent(UITransform)
export class ResponsiveTextSettings extends Component {

    @property({ group: 'Landscape (Альбомная)', tooltip: 'Размер шрифта' })
    public landscapeFontSize: number = 60;

    @property({ group: 'Landscape (Альбомная)', tooltip: 'Размер контейнера (Ширина, Высота)' })
    public landscapeContentSize: Size = new Size(500, 100);


    @property({ group: 'Portrait (Портретная)', tooltip: 'Размер шрифта' })
    public portraitFontSize: number = 40;

    @property({ group: 'Portrait (Портретная)', tooltip: 'Размер контейнера (Ширина, Высота)' })
    public portraitContentSize: Size = new Size(300, 150);


    // Внутренние ссылки на компоненты
    private labelComponent: Label | null = null;
    private transformComponent: UITransform | null = null;

    onLoad() {
        // Получаем компоненты при загрузке
        this.labelComponent = this.getComponent(Label);
        this.transformComponent = this.getComponent(UITransform);
    }

    start() {
        this.updateLayout();
        // Подписываемся на изменение размера окна
        view.on('canvas-resize', this.updateLayout, this);
    }

    updateLayout() {
        if (!this.labelComponent || !this.transformComponent) return;

        const screenSize = view.getVisibleSize();
        const isLandscape = screenSize.width > screenSize.height;

        if (isLandscape) {
            // Применяем настройки для альбомной ориентации
            this.labelComponent.fontSize = this.landscapeFontSize;
            // Обновляем межстрочный интервал, чтобы текст не обрезался (делаем его чуть больше шрифта)
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
}