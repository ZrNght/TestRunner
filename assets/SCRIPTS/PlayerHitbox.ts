import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact, Animation, Sprite, Color, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerHitbox')
export class PlayerHitbox extends Component {

    @property
    public invincibilityDuration: number = 2.0;

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
        if (this.isInvincible) return;

        if (otherCollider.node.name === 'Enemy-001' || otherCollider.node.name === 'Konus') {
            this.takeDamage();
        }
    }

    private takeDamage() {
        this.isInvincible = true;

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