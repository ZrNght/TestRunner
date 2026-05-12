import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnvironmentScroll')
export class EnvironmentScroll extends Component {

    @property
    public speed: number = 500;

    @property
    public spawnX: number = 1500;

    @property
    public despawnX: number = -1500;

    update(dt: number) {
        let pos = this.node.getPosition();
        pos.x -= this.speed * dt;

        if (pos.x <= this.despawnX) {
            pos.x = this.spawnX;
        }

        this.node.setPosition(pos);
    }
}