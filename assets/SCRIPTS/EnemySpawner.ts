import { _decorator, Component, Prefab, Node, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemySpawner')
export class EnemySpawner extends Component {
    
    // Массив префабов. В редакторе можно будет добавить несколько штук (врага, разные конусы).
    @property({ type: [Prefab], tooltip: 'Список префабов для спавна (Враги, Конусы)' })
    public prefabsToSpawn: Prefab[] = [];

    @property({ type: Node, tooltip: 'Нода, куда всё должно бежать' })
    public targetPoint: Node | null = null;

    @property
    public minSpawnInterval: number = 2.0;

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
        // Проверяем, есть ли префабы в списке
        if (this.prefabsToSpawn.length === 0 || !this.targetPoint) return;

        // Выбираем случайный префаб из списка
        const randomIndex = Math.floor(Math.random() * this.prefabsToSpawn.length);
        const selectedPrefab = this.prefabsToSpawn[randomIndex];

        // Создаем копию выбранного префаба
        let spawnedObj = instantiate(selectedPrefab);
        
        this.node.addChild(spawnedObj); 
        spawnedObj.setPosition(Vec3.ZERO); 

        // Передаем координаты цели (скрипт EnemyController висит и на врагах, и на конусах)
        let controller = spawnedObj.getComponent('EnemyController');
        if (controller) {
            controller.setTarget(this.targetPoint.worldPosition);
        }
    }
}