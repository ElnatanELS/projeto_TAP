import { NotasPage } from './../notas/notas';
import { NotaInterface } from './../../interfaces/notaInterface';
import { WebserviceProvider } from './../../providers/webservice/webservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html',
})
export class PrevisaoPage {

  public cidade: string = "campina grande";
  public notaPrevisao: NotaInterface = { Title: '', Body: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: WebserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevisaoPage');
    this.buscaPrevisao();
  }

  buscaPrevisao() {
    let notaInterna;
    this.webservice.getPrevisao(this.cidade).subscribe(data => {
      console.log(data);
      console.log('dentro');
      notaInterna = data;
      // this.cidade = '';
      // 
    });
    console.log(notaInterna);
    this.notaPrevisao.Title = 'Previsão em ' + notaInterna.name;
     this.notaPrevisao.Body = 'Temperatura em ' + notaInterna.main.temp + ' e ' + notaInterna.weather[0].description + '. Em '+this.getData() ;
  }

  getData() {
    let data: any = new Date();
    let dd: any = data.getDate();
    let mm: any = data.getMonth() + 1;
    let yyyy: any = data.getFullYear();
    let h: any = data.getHours();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy + ' - ' + h + 'h';
  }

  salvaPrevisao(){
    this.navCtrl.push(NotasPage,{nota:this.notaPrevisao});
  }

}
