import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = true;

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.WHITE
    },
    {
      name: "IronMan",
      canFly: true,
      color: Color.RED
    },
    {
      name: "Acuaman",
      canFly: false,
      color: Color.YELLOW
    },
    {
      name: "Green Lantern",
      canFly: true,
      color: Color.GREEN
    }
  ]

  public sortCondition: keyof Hero = "name";

  public toggleUppercase(): void {
    this.isUpperCase = ! this.isUpperCase;
  }

  public changeOrder ( value: keyof Hero ) {
    this.sortCondition= value;
  }

}
