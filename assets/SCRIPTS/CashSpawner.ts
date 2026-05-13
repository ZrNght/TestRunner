import { _decorator, Component, Prefab, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CashSpawner')
export class CashSpawner extends Component {

    @property({ type: [Prefab] })
    public prefabsToSpawn: Prefab[] = [];

    @property
    public minSpawnInterval: number = 1.0;

    @property
    public maxSpawnInterval: number = 3.0;

    @property
    public archChance: number = 0.2;

    @property
    public archCooldown: number = 5.0;

    @property
    public delayAfterArch: number = 2.0;

    @property
    public archSpacingX: number = 100;

    @property({ type: [Number] })
    public archHeights: number[] = [0, 120, 180, 120, 0];

    private timer: number = 0;
    private nextSpawnTime: number = 0;
    private archCooldownTimer: number = 0;

    start() {
        this.setNextSpawnTime();
        this.archCooldownTimer = this.archCooldown;
    }

    update(deltaTime: number) {
        this.timer += deltaTime;
        this.archCooldownTimer += deltaTime;

        if (this.timer >= this.nextSpawnTime) {
            if (Math.random() <= this.archChance && this.archCooldownTimer >= this.archCooldown) {
                this.spawnArch();
                this.archCooldownTimer = 0;
                this.timer = 0;
                this.nextSpawnTime = this.delayAfterArch;
            } else {
                this.spawnSingle();
                this.timer = 0;
                this.setNextSpawnTime();
            }
        }
    }

    private setNextSpawnTime() {
        this.nextSpawnTime = Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
    }

    private spawnSingle() {
        if (this.prefabsToSpawn.length === 0) return;

        const prefab = this.prefabsToSpawn[Math.floor(Math.random() * this.prefabsToSpawn.length)];
        let spawnedObj = instantiate(prefab);
        
        this.node.addChild(spawnedObj); 
        spawnedObj.setPosition(Vec3.ZERO); 
    }

    private spawnArch() {
        if (this.prefabsToSpawn.length === 0) return;

        for (let i = 0; i < this.archHeights.length; i++) {
            const prefab = this.prefabsToSpawn[Math.floor(Math.random() * this.prefabsToSpawn.length)];
            let spawnedObj = instantiate(prefab);
            
            this.node.addChild(spawnedObj);
            spawnedObj.setPosition(new Vec3(i * this.archSpacingX, this.archHeights[i], 0));
        }
    }
}