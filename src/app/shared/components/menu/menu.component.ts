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
                    icon: 'pi pi-align-left',
                    routerLink: '/',
                    target: '_self'
                },
                {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers',
                    target: '_self'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                  routerLink: 'uncommon',
                  target: '_self'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: [
                    {
                      label: 'Custom Pipes',
                      icon: 'pi pi-cog',
                      routerLink: 'custom'
                    }
            ]
        }
    ];
}

}
