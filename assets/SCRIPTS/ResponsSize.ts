import { _decorator, Component, view, Size, UITransform } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('ResponsiveContentSize')
@requireComponent(UITransform)
export class ResponsiveContentSize extends Component {

    @property({ group: 'Landscape' })
    public landscapeSize: Size = new Size(750, 140);

    @property({ group: 'Portrait' })
    public portraitSize: Size = new Size(400, 140);

    private transformComponent: UITransform | null = null;

    onLoad() {
        this.transformComponent = this.getComponent(UITransform);
    }

    start() {
        this.updateSize();
        view.on('canvas-resize', this.updateSize, this);
    }

    updateSize() {
        if (!this.transformComponent) return;

        const screenSize = view.getVisibleSize();
        const isLandscape = screenSize.width > screenSize.height;

        if (isLandscape) {
            this.transformComponent.setContentSize(this.landscapeSize);
        } else {
            this.transformComponent.setContentSize(this.portraitSize);
        }
    }

    onDestroy() {
        view.off('canvas-resize', this.updateSize, this);
    }
}