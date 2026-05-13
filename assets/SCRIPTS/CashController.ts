import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CashController')
export class CashController extends Component {

    @property
    public speed: number = 500;

    @property
    public despawnX: number = -1000;

    update(deltaTime: number) {
        let pos = this.node.position;
        this.node.setPosition(pos.x - this.speed * deltaTime, pos.y, pos.z);

        if (this.node.worldPosition.x <= this.despawnX) {
            this.node.destroy();
        }
    }
}