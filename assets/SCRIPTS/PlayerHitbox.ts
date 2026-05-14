import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact, Animation, Sprite, Color, tween, UIOpacity, Vec3, RigidBody2D } from 'cc';
import { HealthManager } from './HealthManager';
import { ScoreManager } from './ScoreManager';
const { ccclass, property } = _decorator;

@ccclass('PlayerHitbox')
export class PlayerHitbox extends Component {

    @property
    public invincibilityDuration: number = 2.0;

    @property({ type: HealthManager })
    public healthManager: HealthManager | null = null;

    @property({ type: ScoreManager })
    public scoreManager: ScoreManager | null = null;

    private isInvincible: boolean = false;
    private playerAnimation: Animation | null = null;
    private playerSprite: Sprite | null = null;
    private uiOpacity: UIOpacity | null = null;

    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        this.playerAnimation = this.getComponent(Animation);
        this.playerSprite = this.getComponent(Sprite);
        this.uiOpacity = this.getComponent(UIOpacity) || this.addComponent(UIOpacity);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        const nodeName = otherCollider.node.name;
        const lowerName = nodeName.toLowerCase();

        if (lowerName.includes('cash') || lowerName.includes('paypal')) {
            
            otherCollider.enabled = false;
            let rb = otherCollider.node.getComponent(RigidBody2D);
            if (rb) rb.enabled = false;

            let cashCtrl = otherCollider.node.getComponent('CashController');
            if (cashCtrl) cashCtrl.enabled = false;
            let enemyCtrl = otherCollider.node.getComponent('EnemyController');
            if (enemyCtrl) enemyCtrl.enabled = false;

            if (this.scoreManager) {
                const startPos = otherCollider.node.worldPosition.clone();
                const targetPos = this.scoreManager.node.worldPosition.clone();
                const tweenData = { t: 0 };

                tween(tweenData)
                    .to(0.4, { t: 1 }, { 
                        easing: 'quadIn',
                        onUpdate: (target: any) => {
                            if (otherCollider.node && otherCollider.node.isValid) {
                                let currentPos = new Vec3();
                                Vec3.lerp(currentPos, startPos, targetPos, target.t);
                                otherCollider.node.worldPosition = currentPos;
                                
                                otherCollider.node.eulerAngles = new Vec3(0, 0, 1080 * target.t);
                            }
                        }
                    })
                    .call(() => {
                        if (otherCollider.node && otherCollider.node.isValid) {
                            otherCollider.node.destroy();
                            this.scoreManager!.addScore(10, 20);
                        }
                    })
                    .start();
            } else {
                otherCollider.node.destroy();
            }
            return;
        }

        if (this.isInvincible) return;

        if (nodeName === 'Enemy-001' || nodeName === 'Konus') {
            this.takeDamage();
        }
    }

    private takeDamage() {
        this.isInvincible = true;

        if (this.healthManager) {
            this.healthManager.loseHeart();
        }

        if (this.playerAnimation) {
            this.playerAnimation.play('Char_Hit');
        }

        this.playDamageEffect();

        this.scheduleOnce(() => {
            this.isInvincible = false;
            if (this.playerSprite) this.playerSprite.color = Color.WHITE;
            if (this.uiOpacity) this.uiOpacity.opacity = 255;
            
            if (this.playerAnimation) {
                this.playerAnimation.play('Char_Run');
            }
        }, this.invincibilityDuration);
    }

    private playDamageEffect() {
        if (!this.playerSprite) return;

        const normalColor = new Color(255, 255, 255, 255);
        const damageColor = new Color(255, 100, 100, 255);

        tween(this.playerSprite)
            .to(0.1, { color: damageColor })
            .to(0.1, { color: normalColor })
            .union()
            .repeat(Math.floor(this.invincibilityDuration / 0.2)) 
            .start();
    }
}