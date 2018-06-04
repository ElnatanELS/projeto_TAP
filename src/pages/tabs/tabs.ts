import { PrevisaoPage } from './../previsao/previsao';
import { NotasPage } from './../notas/notas';
import { Component } from '@angular/core';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotasPage;
  tab2Root = PrevisaoPage;
  

  constructor() {

  }
}
