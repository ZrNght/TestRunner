import { _decorator, Component, Label, tween, Vec3 } from 'cc';
const { ccclass } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {

    private scoreLabel: Label | null = null;
    private currentScore: number = 0;
    private originalScale: Vec3 = new Vec3();

    start() {
        this.scoreLabel = this.getComponent(Label);
        this.originalScale = this.node.scale.clone();
        this.updateScoreDisplay();
    }

    public addScore(min: number, max: number) {
        const amount = Math.floor(Math.random() * (max - min + 1)) + min;
        this.currentScore += amount;
        this.updateScoreDisplay();
        this.playPopAnimation();
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
}