System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, CashSpawner;

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
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bde3nspE9H+oZmPfh8OE17", "CashSpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CashSpawner", CashSpawner = (_dec = ccclass('CashSpawner'), _dec2 = property({
        type: [Prefab]
      }), _dec3 = property({
        type: [Number]
      }), _dec(_class = (_class2 = class CashSpawner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabsToSpawn", _descriptor, this);

          _initializerDefineProperty(this, "minSpawnInterval", _descriptor2, this);

          _initializerDefineProperty(this, "maxSpawnInterval", _descriptor3, this);

          _initializerDefineProperty(this, "archChance", _descriptor4, this);

          _initializerDefineProperty(this, "archCooldown", _descriptor5, this);

          _initializerDefineProperty(this, "delayAfterArch", _descriptor6, this);

          _initializerDefineProperty(this, "archSpacingX", _descriptor7, this);

          _initializerDefineProperty(this, "archHeights", _descriptor8, this);

          this.timer = 0;
          this.nextSpawnTime = 0;
          this.archCooldownTimer = 0;
        }

        start() {
          this.setNextSpawnTime();
          this.archCooldownTimer = this.archCooldown;
        }

        update(deltaTime) {
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

        setNextSpawnTime() {
          this.nextSpawnTime = Math.random() * (this.maxSpawnInterval - this.minSpawnInterval) + this.minSpawnInterval;
        }

        spawnSingle() {
          if (this.prefabsToSpawn.length === 0) return;
          const prefab = this.prefabsToSpawn[Math.floor(Math.random() * this.prefabsToSpawn.length)];
          let spawnedObj = instantiate(prefab);
          this.node.addChild(spawnedObj);
          spawnedObj.setPosition(Vec3.ZERO);
        }

        spawnArch() {
          if (this.prefabsToSpawn.length === 0) return;

          for (let i = 0; i < this.archHeights.length; i++) {
            const prefab = this.prefabsToSpawn[Math.floor(Math.random() * this.prefabsToSpawn.length)];
            let spawnedObj = instantiate(prefab);
            this.node.addChild(spawnedObj);
            spawnedObj.setPosition(new Vec3(i * this.archSpacingX, this.archHeights[i], 0));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabsToSpawn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minSpawnInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxSpawnInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "archChance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "archCooldown", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delayAfterArch", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2.0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "archSpacingX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "archHeights", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [0, 120, 180, 120, 0];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03749a55a180bcb7ce3e9fcd260fa8c6ee1dafa8.js.map