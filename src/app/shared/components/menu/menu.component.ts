import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left'
                },
                {
                    label: 'Números',
                    icon: 'pi pi-dollar'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: [
                    {
                      label: 'Otro Elemento',
                      icon: 'pi pi-cog',
                      items: [
                        {
                          label: 'Otro Elemento',
                          icon: 'pi pi-cog',

                        }
                      ]
                    }
            ]
        }
    ];
}

}
