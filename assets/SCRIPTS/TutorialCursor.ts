import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TutorialCursor')
export class TutorialCursor extends Component {

    @property
    public scaleFactor: number = 1.2;

    @property
    public duration: number = 0.5;

    private originalScale: Vec3 = new Vec3();
    private intervalId: number = 0;
    private elapsedTime: number = 0;

    start() {
        this.originalScale = this.node.scale.clone();
        
        this.intervalId = setInterval(() => {
            this.elapsedTime += 0.016;
            
            const progress = (1 - Math.cos(this.elapsedTime * Math.PI / this.duration)) / 2;
            const currentScale = 1 + (this.scaleFactor - 1) * progress;

            if (this.node && this.node.isValid) {
                this.node.setScale(
                    this.originalScale.x * currentScale,
                    this.originalScale.y * currentScale,
                    this.originalScale.z
                );
            }
        }, 16) as unknown as number;
    }

    onDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}