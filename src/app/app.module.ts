import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import LocaleEsAr from '@angular/common/locales/es-AR'  //Importa el Locale de Argentina
import { registerLocaleData } from '@angular/common';  // Importa una función para configurar el Locale de la Aplicación

import LocaleEnNa from '@angular/common/locales/en-NA'; // Podemos Importar varios Locale que soporte nuestra aplicación.
import LocaleJapones from '@angular/common/locales/ja';

registerLocaleData(LocaleEsAr); /// Configura los Pipes con la información de locale de argentina.

registerLocaleData(LocaleEnNa); /// Me configuro otros idiomas como Ingles de Norte-America
registerLocaleData(LocaleJapones); /// Me configuro otros idiomas como Ingles de Norte-America

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'es-AR'},  /// CON ESTO SETEO EL LOCALE POR DEFECTO EN TODA MI APP. EN ESTE CASO CON EL LOCALE DE ARGENTINA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
