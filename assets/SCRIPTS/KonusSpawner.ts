import { _decorator, Component, Prefab, Node, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KonusSpawner')
export class KonusSpawner extends Component {
    
    @property({ type: [Prefab], tooltip: 'Список префабов конусов' })
    public prefabsToSpawn: Prefab[] = [];

    @property({ type: Node, tooltip: 'Нода, куда конусы должны бежать' })
    public targetPoint: Node | null = null;

    @property
    public minSpawnInterval: number = 3.0;

    @property
    public maxSpawnInterval: number = 5.0;

    private timer: number = 0;
    private nextSpawnTime: number = 0;

    start() {
        this.setNextSpawnTime();
    }

    update(deltaTime: number) {
        this.timer += deltaTime;

        if (this.timer >= this.nextSpawnTime) {
            this.spawnRandomObject();
            this.timer = 0;
            this.setNextSpawnTime();
        }
    }

    private setNextSpawnTime() {
        this.nextSpawnTime = Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
    }

    private spawnRandomObject() {
        if (this.prefabsToSpawn.length === 0 || !this.targetPoint) return;

        const randomIndex = Math.floor(Math.random() * this.prefabsToSpawn.length);
        const selectedPrefab = this.prefabsToSpawn[randomIndex];

        let spawnedObj = instantiate(selectedPrefab);
        
        this.node.addChild(spawnedObj); 
        spawnedObj.setPosition(Vec3.ZERO); 

        // Скрипт движения у конуса и врага общий, поэтому оставляем EnemyController
        let controller = spawnedObj.getComponent('EnemyController');
        if (controller) {
            controller.setTarget(this.targetPoint.worldPosition);
        }
    }
}