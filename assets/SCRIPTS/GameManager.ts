import { _decorator, Component, Node, input, Input, EventTouch, Animation, director } from 'cc';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(PlayerController)
    player: PlayerController = null;

    public static isGameStarted: boolean = false;

    onLoad() {
        GameManager.isGameStarted = false;
        input.on(Input.EventType.TOUCH_START, this.onFirstTouch, this);
    }

    start() {
        this.setFrozenState(true);
    }

    onFirstTouch(event: EventTouch) {
        if (!GameManager.isGameStarted) {
            GameManager.isGameStarted = true;
            
            this.setFrozenState(false);

            if (this.player) {
                this.player.startGame();
            }

            input.off(Input.EventType.TOUCH_START, this.onFirstTouch, this);
        }
    }

    private setFrozenState(freeze: boolean) {
        const scene = director.getScene();
        if (scene) {
            for (let i = 0; i < scene.children.length; i++) {
                this.toggleRecursive(scene.children[i], freeze);
            }
        }
    }

    private toggleRecursive(node: Node, freeze: boolean) {
        if (this.player && node === this.player.node) return;
        if (node === this.node) return;

        const comps = node.getComponents(Component);
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i] as any;
            if (!comp) continue;

            const compName = comp.constructor.name;
            
            if (compName === 'Animation' || compName === 'SkeletalAnimation') {
                if (freeze) {
                    comp.pause();
                } else {
                    comp.resume();
                }
            } else if (comp.update && typeof comp.update === 'function') {
                if (compName !== 'Sprite' && compName !== 'Label' && compName !== 'Graphics' && compName !== 'UITransform' && compName !== 'Widget') {
                    comp.enabled = !freeze;
                }
            }
        }

        for (let i = 0; i < node.children.length; i++) {
            this.toggleRecursive(node.children[i], freeze);
        }
    }
}