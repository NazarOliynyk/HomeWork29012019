import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Big Fight';

  flag1 = false;
  flag2 = false;
  heroes = [
    {
      name: '',
      health: 0,
      power: 0
    },
    {
      name: '',
      health: 0,
      power: 0
    },
  ];
  // heroes = [];
  message = '';
  game;

  start() {
      console.log(Math.floor(Math.random() * 3));
      this.game = setInterval( () =>  {
      const hitPower1 = this.genPower(this.heroes[0].power);
      const hitPower2 = this.genPower(this.heroes[1].power);
      this.punch(hitPower1, this.heroes[1]);
      this.punch(hitPower2, this.heroes[0]);
      if (this.heroes[0].health <= 0) {
        console.log(this.heroes[1].name, 'WON!');
        this.message = this.heroes[1].name + ' WON!';
         clearInterval(this.game);
      }
      if (this.heroes[1].health <= 0) {
        console.log(this.heroes[0].name, 'WON!');
        this.message = this.heroes[0].name + ' WON!';
         clearInterval(this.game);
      }
    }, 500);
  }
  punch(hitPower, hero) {
    if (hero.health < hitPower) {
      hero.health = 0;
    } else {
      hero.health -= hitPower;
    }
  }
  genPower(powerMax) {
    return Math.floor(Math.random() * powerMax);
  }

  setPower() {
    return Math.floor(Math.random() * 50);
  }
  setHealth() {
    return Math.floor(Math.random() * 100);
  }
  initNewGame() {
    this.flag1 = true;
    this.flag2 = false;
    this.heroes = [
      {
        name: 'Hero 1',
        health: this.setHealth(),
        power: this.setPower()
      },
      {
        name: 'Hero 2',
        health: this.setHealth(),
        power: this.setPower()
      },
    ];
    this.message = '';
    this.game = null;
  }

  // it uses pipe to modify html-tag only, not the object
  defaultData() {
    this.flag2 = true;
    this.flag1 = false;
  }
}
