import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name: string = "Gabriel";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
                            'male': 'invitarlo',
                            'female': 'invitarla'
                          }


  public changeClient(): void {
    this.name = "Viviana";
    this.gender = "female";
  }



  public clients: string [] = [  "Gabriel", "Viviana", "Mariana", "Horacio", "Jose", "Jorge", "Nadia", "Martin", "Mario", "Dante" ];
  public clientsMap: { [key: string]: string} = {
                        '=0': 'no tenemos clientes esperando.',
                        '=1': 'tenemos 1 cliente esperando.',
                        'other': 'tenemos # clientes esperando.'
                      };

  public atenderCliente () {
    this.clients.shift();
  }

  public person = {
    name: "Gabriel Quinteros",
    address: "Buenos Aires, Argentina",
    age: 29
  }

  public myObservableTimer = interval(2000); // Crea un observable que emite un valor que se auto-incremeta en 1 cada 2 segundos desde 0 - N.


  public myPromise: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("Valor emitido por la promesa");
    }, 3500);
  } );


}
