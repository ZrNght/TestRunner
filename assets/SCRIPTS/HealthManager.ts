import { _decorator, Component, Node, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HealthManager')
export class HealthManager extends Component {

    @property({ type: [Node] })
    public hearts: Node[] = [];

    private currentHealth: number = 0;

    start() {
        this.currentHealth = this.hearts.length;
    }

    public loseHeart() {
        if (this.currentHealth > 0) {
            this.currentHealth--;
            let targetHeart = this.hearts[this.currentHealth];
            let uiOpacity = targetHeart.getComponent(UIOpacity);
            if (!uiOpacity) {
                uiOpacity = targetHeart.addComponent(UIOpacity);
            }
            uiOpacity.opacity = 100;
        }
    }
}