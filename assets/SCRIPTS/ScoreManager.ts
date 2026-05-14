import { _decorator, Component, Label, tween, Vec3, Node, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {

    @property({ type: Node })
    public complimentContainer: Node | null = null;

    private scoreLabel: Label | null = null;
    private currentScore: number = 0;
    private originalScale: Vec3 = new Vec3();
    private originalPositions: Map<Node, Vec3> = new Map();

    start() {
        this.scoreLabel = this.getComponent(Label);
        this.originalScale = this.node.scale.clone();
        this.updateScoreDisplay();

        if (this.complimentContainer) {
            for (let child of this.complimentContainer.children) {
                this.originalPositions.set(child, child.getPosition().clone());
                
                let uiOpacity = child.getComponent(UIOpacity);
                if (!uiOpacity) {
                    uiOpacity = child.addComponent(UIOpacity);
                }
                uiOpacity.opacity = 0;
            }
        }
    }

    public addScore(min: number, max: number) {
        const amount = Math.floor(Math.random() * (max - min + 1)) + min;
        this.currentScore += amount;
        this.updateScoreDisplay();
        this.playPopAnimation();
        this.showRandomCompliment();
    }

    private updateScoreDisplay() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `$${this.currentScore}`;
        }
    }

    private playPopAnimation() {
        tween(this.node)
            .stop()
            .to(0.1, { scale: new Vec3(this.originalScale.x * 1.3, this.originalScale.y * 1.3, this.originalScale.z) })
            .to(0.1, { scale: this.originalScale })
            .start();
    }

    private showRandomCompliment() {
        if (Math.random() > 0.3) return;
        
        if (!this.complimentContainer || this.complimentContainer.children.length === 0) return;

        const children = this.complimentContainer.children;
        const randomIndex = Math.floor(Math.random() * children.length);
        const complimentNode = children[randomIndex];

        let uiOpacity = complimentNode.getComponent(UIOpacity);
        if (!uiOpacity) {
            uiOpacity = complimentNode.addComponent(UIOpacity);
        }

        tween(complimentNode).stop();
        tween(uiOpacity).stop();

        const originalPos = this.originalPositions.get(complimentNode) || new Vec3(0, 0, 0);
        complimentNode.setPosition(originalPos.clone());
        
        complimentNode.setScale(new Vec3(0.5, 0.5, 0.5));
        uiOpacity.opacity = 255;

        tween(complimentNode)
            .to(0.2, { scale: new Vec3(1.2, 1.2, 1.2) }, { easing: 'backOut' })
            .to(0.1, { scale: new Vec3(1.0, 1.0, 1.0) })
            .delay(0.5)
            .by(0.3, { position: new Vec3(0, 50, 0) })
            .start();

        tween(uiOpacity)
            .delay(0.8)
            .to(0.3, { opacity: 0 })
            .start();
    }
}