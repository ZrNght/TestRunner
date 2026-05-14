System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, tween, Vec3, _dec, _class, _crd, ccclass, ScoreManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7d04uo6vhLTJDDpWWxugdU", "ScoreManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'tween', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      _export("ScoreManager", ScoreManager = (_dec = ccclass('ScoreManager'), _dec(_class = class ScoreManager extends Component {
        constructor(...args) {
          super(...args);
          this.scoreLabel = null;
          this.currentScore = 0;
          this.originalScale = new Vec3();
        }

        start() {
          this.scoreLabel = this.getComponent(Label);
          this.originalScale = this.node.scale.clone();
          this.updateScoreDisplay();
        }

        addScore(min, max) {
          const amount = Math.floor(Math.random() * (max - min + 1)) + min;
          this.currentScore += amount;
          this.updateScoreDisplay();
          this.playPopAnimation();
        }

        updateScoreDisplay() {
          if (this.scoreLabel) {
            this.scoreLabel.string = `$${this.currentScore}`;
          }
        }

        playPopAnimation() {
          tween(this.node).stop().to(0.1, {
            scale: new Vec3(this.originalScale.x * 1.3, this.originalScale.y * 1.3, this.originalScale.z)
          }).to(0.1, {
            scale: this.originalScale
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d462e39b65af6b5cbeb328a8c4c9a27cb9d4c389.js.map