import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "gabriel quinteros";
  public nameUpper: string = "GABRIEL QUINTEROS";
  public fullname: string = "gAbRieL qUInTeRos";

  public customDate: Date = new Date();



}
