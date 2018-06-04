import { NotaInterface } from './../../interfaces/notaInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  private url: string = "http://devmedianotesapi.azurewebsites.net/";
  private urlPrevisao: string = "http://api.openweathermap.org/data/2.5/weather?APPID=65e0b5d2bc875145a330a96b627e5353&unitis=metric&lang=pt&q=";


  constructor(public http: HttpClient) {
    console.log('Hello WebserviceProvider Provider');
  }

  addNota(nota: NotaInterface) {
    return this.http.post(this.url + 'api/notes', nota)
      .toPromise()
      .then((res) => res);
  }
  getNota() {
    return this.http.get(this.url + 'api/notes')
  }

  editaNota(nota: NotaInterface) {
    return this.http.put(this.url + 'api/notes/'+nota.Id, nota)
      .toPromise()
      .then((res) => res);
  }

  deletaNota(nota:NotaInterface){
    return this.http.delete(this.url + 'api/notes/'+nota.Id)
    .toPromise()
    .then((res) => res);
  }
  getPrevisao(cidade: string) {
    return this.http.get(this.urlPrevisao+cidade);
  }

}
