new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      let max = 10;
      let min = 3;
      let damage = Math.round((max * (Math.random() + min)) / (1 + min));
      //   let damege = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;
      if (this.monsterHealth <= 0) {
        alert("Yon won!");
        this.gameIsRunning = false;
        return;
      }
      max = 12;
      min = 5;
      damage = Math.round((max * (Math.random() + min)) / (1 + min));
      //   let damege = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;
      if (this.playerHealth <= 0) {
        alert("Yon lost!");
        this.gameIsRunning = false;
        return;
      }
    },
  },
});
