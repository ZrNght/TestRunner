import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, director, input, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TutorialAvoid')
export class TutorialAvoid extends Component {

    @property({ type: Node })
    public tutorialUI: Node | null = null;

    @property({ type: Node })
    public cursorSprite: Node | null = null;

    private isTutorialDone: boolean = false;

    start() {
        if (this.tutorialUI) {
            this.tutorialUI.active = false;
        }
        if (this.cursorSprite) {
            this.cursorSprite.active = false;
        }

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (this.isTutorialDone) return;

        if (otherCollider.node.name === 'Enemy-001' || otherCollider.node.name === 'Konus') {
            this.isTutorialDone = true;
            this.showTutorial();
        }
    }

    private showTutorial() {
        if (this.tutorialUI) {
            this.tutorialUI.active = true;
        }
        if (this.cursorSprite) {
            this.cursorSprite.active = true;
        }
        
        this.scheduleOnce(() => {
            director.pause();
        }, 0);

        input.on(Input.EventType.TOUCH_START, this.hideTutorial, this);
    }

    private hideTutorial() {
        input.off(Input.EventType.TOUCH_START, this.hideTutorial, this);
        
        director.resume();
        
        if (this.tutorialUI) {
            this.tutorialUI.active = false;
        }
        if (this.cursorSprite) {
            this.cursorSprite.active = false;
        }
    }
}