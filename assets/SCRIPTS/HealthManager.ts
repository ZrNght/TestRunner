import { _decorator, Component, Node, UIOpacity, director, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HealthManager')
export class HealthManager extends Component {

    @property({ type: [Node] })
    public hearts: Node[] = [];

    @property({ type: Node })
    public failOverlay: Node | null = null;

    @property({ type: Node })
    public failSprite: Node | null = null;

    private currentHealth: number = 0;

    start() {
        this.currentHealth = this.hearts.length;
        if (this.failOverlay) this.failOverlay.active = false;
        if (this.failSprite) this.failSprite.active = false;
    }

    public loseHeart() {
        if (this.currentHealth > 0) {
            this.currentHealth--;
            let targetHeart = this.hearts[this.currentHealth];
            let uiOpacity = targetHeart.getComponent(UIOpacity) || targetHeart.addComponent(UIOpacity);
            uiOpacity.opacity = 100;

            if (this.currentHealth <= 0) {
                this.gameOver();
            }
        }
    }

    private gameOver() {
        director.pause();

        setTimeout(() => {
            this.showFailScreen();
        }, 500);
    }

    private showFailScreen() {
        // Сначала показываем черный экран
        if (this.failOverlay) {
            this.failOverlay.active = true;
            if (this.failOverlay.parent) {
                this.failOverlay.setSiblingIndex(this.failOverlay.parent.children.length - 1);
            }

            let overlayOpacity = this.failOverlay.getComponent(UIOpacity) || this.failOverlay.addComponent(UIOpacity);
            overlayOpacity.opacity = 0;
            
            let time1 = 0;
            let duration1 = 0.5;
            let interval1 = setInterval(() => {
                time1 += 0.016;
                let progress = Math.min(time1 / duration1, 1);
                if (overlayOpacity && overlayOpacity.isValid) {
                    overlayOpacity.opacity = progress * 200;
                }
                if (progress >= 1) clearInterval(interval1);
            }, 16);
        }

        // Затем показываем спрайт Fail, чтобы он был поверх черного экрана
        if (this.failSprite) {
            this.failSprite.active = true;
            if (this.failSprite.parent) {
                // Вытаскиваем надпись еще выше, поверх черного фона
                this.failSprite.setSiblingIndex(this.failSprite.parent.children.length - 1);
            }
            this.failSprite.setScale(new Vec3(0, 0, 0));
            
            let time2 = 0;
            let duration2 = 0.6;
            const s = 1.70158; 
            
            let interval2 = setInterval(() => {
                time2 += 0.016;
                let t = Math.min(time2 / duration2, 1);
                
                let t1 = t - 1;
                let progress = (t1 * t1 * ((s + 1) * t1 + s) + 1);

                if (this.failSprite && this.failSprite.isValid) {
                    this.failSprite.setScale(new Vec3(progress, progress, progress));
                }
                if (t >= 1) clearInterval(interval2);
            }, 16);
        }
    }
}