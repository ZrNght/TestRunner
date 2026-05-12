import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BackgroundScroll')
export class BackgroundScroll extends Component {

    @property(Vec3)
    public spawnPoint: Vec3 = new Vec3(4000, 0, 0);

    @property(Vec3)
    public despawnPoint: Vec3 = new Vec3(-4000, 0, 0);

    @property
    public speed: number = 200;

    private _range: number = 0;

    start() {
        this._range = Math.abs(this.spawnPoint.x - this.despawnPoint.x);
    }

    update(dt: number) {
        let pos = this.node.getPosition();
        pos.x -= this.speed * dt;

        if (pos.x <= this.despawnPoint.x) {
            pos.x += this._range;
        }

        this.node.setPosition(pos);
    }
}