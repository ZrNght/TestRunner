System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Node, instantiate, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, EnemySpawner;

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

      _cclegacy._RF.push({}, "6d86fQdVGNCgYbKYE6Ot8CO", "EnemySpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Node', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemySpawner", EnemySpawner = (_dec = ccclass('EnemySpawner'), _dec2 = property({
        type: [Prefab],
        tooltip: 'Список префабов для спавна (Враги, Конусы)'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Нода, куда всё должно бежать'
      }), _dec(_class = (_class2 = class EnemySpawner extends Component {
        constructor(...args) {
          super(...args);

          // Массив префабов. В редакторе можно будет добавить несколько штук (врага, разные конусы).
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
          // Проверяем, есть ли префабы в списке
          if (this.prefabsToSpawn.length === 0 || !this.targetPoint) return; // Выбираем случайный префаб из списка

          const randomIndex = Math.floor(Math.random() * this.prefabsToSpawn.length);
          const selectedPrefab = this.prefabsToSpawn[randomIndex]; // Создаем копию выбранного префаба

          let spawnedObj = instantiate(selectedPrefab);
          this.node.addChild(spawnedObj);
          spawnedObj.setPosition(Vec3.ZERO); // Передаем координаты цели (скрипт EnemyController висит и на врагах, и на конусах)

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
          return 2.0;
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
//# sourceMappingURL=eeb98b1be67a9c2ad5b6d25328ca0e998ec50e2d.js.map