import { _decorator, Component, view, Vec3, Size, UITransform } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('ResponsiveCursorSettings')
@requireComponent(UITransform)
export class ResponsiveCursorSettings extends Component {

    @property({ group: 'Landscape (Альбомная)', tooltip: 'Позиция (X, Y, Z)' })
    public landscapePosition: Vec3 = new Vec3(0, -50, 0);

    @property({ group: 'Landscape (Альбомная)', tooltip: 'Размер (Ширина, Высота)' })
    public landscapeSize: Size = new Size(150, 150);


    @property({ group: 'Portrait (Портретная)', tooltip: 'Позиция (X, Y, Z)' })
    public portraitPosition: Vec3 = new Vec3(0, -100, 0);

    @property({ group: 'Portrait (Портретная)', tooltip: 'Размер (Ширина, Высота)' })
    public portraitSize: Size = new Size(100, 100);


    private transformComponent: UITransform | null = null;

    onLoad() {
        this.transformComponent = this.getComponent(UITransform);
    }

    start() {
        this.updateLayout();
        // Подписываемся на поворот/изменение размера экрана
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
}