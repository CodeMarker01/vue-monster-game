new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  getters: {},
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= this.calculateDamage(3, 10);
      console.log(this.calculateDamage(3, 10));
      if (this.checkWin()) {
        return;
      }
      //   damage = Math.round((max * (Math.random() + min)) / (1 + min));
      //   let damege = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterAttack();
    },
    specialAttack() {
      this.monsterHealth -= this.calculateDamage(10, 15);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttack();
    },

    // helper function
    monsterAttack() {
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    },
    calculateDamage(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
