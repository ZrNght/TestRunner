System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Node, instantiate, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, KonusSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe380ZyAt5JpYgkKvS+VlJd", "KonusSpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Node', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("KonusSpawner", KonusSpawner = (_dec = ccclass('KonusSpawner'), _dec2 = property({
        type: [Prefab],
        tooltip: 'Список префабов конусов'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Нода, куда конусы должны бежать'
      }), _dec(_class = (_class2 = class KonusSpawner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabsToSpawn", _descriptor, this);

          _initializerDefineProperty(this, "targetPoint", _descriptor2, this);

          _initializerDefineProperty(this, "minSpawnInterval", _descriptor3, this);

          _initializerDefineProperty(this, "maxSpawnInterval", _descriptor4, this);

          this.timer = 0;
          this.nextSpawnTime = 0;
        }

        start() {
          this.setNextSpawnTime();
        }

        update(deltaTime) {
          this.timer += deltaTime;

          if (this.timer >= this.nextSpawnTime) {
            this.spawnRandomObject();
            this.timer = 0;
            this.setNextSpawnTime();
          }
        }

        setNextSpawnTime() {
          this.nextSpawnTime = Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
        }

        spawnRandomObject() {
          if (this.prefabsToSpawn.length === 0 || !this.targetPoint) return;
          const randomIndex = Math.floor(Math.random() * this.prefabsToSpawn.length);
          const selectedPrefab = this.prefabsToSpawn[randomIndex];
          let spawnedObj = instantiate(selectedPrefab);
          this.node.addChild(spawnedObj);
          spawnedObj.setPosition(Vec3.ZERO); // Скрипт движения у конуса и врага общий, поэтому оставляем EnemyController

          let controller = spawnedObj.getComponent('EnemyController');

          if (controller) {
            controller.setTarget(this.targetPoint.worldPosition);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabsToSpawn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minSpawnInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxSpawnInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9378a6753b671f937295bcb4ae6cdc5d0799e25.js.map