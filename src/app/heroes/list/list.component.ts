import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeroNames: string [] = ['Spiderman','Ironman','Hulk','She Hulk', 'Thron'];
  public deletdHero?: string;

  removeLastHero(): void {
    this.deletdHero =this.HeroNames.pop();

  }


}
