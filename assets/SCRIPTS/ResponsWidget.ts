import { _decorator, Component, view, Widget, Vec3 } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('ResponsiveWidget')
@requireComponent(Widget)
export class ResponsiveWidget extends Component {

    @property({ group: 'Landscape' })
    public landscapeRight: number = 0;

    @property({ group: 'Landscape' })
    public landscapeBottom: number = 0;

    @property({ group: 'Landscape' })
    public landscapeScale: Vec3 = new Vec3(1, 1, 1);

    @property({ group: 'Portrait' })
    public portraitRight: number = 0;

    @property({ group: 'Portrait' })
    public portraitBottom: number = 0;

    @property({ group: 'Portrait' })
    public portraitScale: Vec3 = new Vec3(1, 1, 1);

    private widgetComponent: Widget | null = null;

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
}