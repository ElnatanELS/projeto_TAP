import { DetalhePage } from './../detalhe/detalhe';
import { WebserviceProvider } from './../../providers/webservice/webservice';
import { NotaInterface } from './../../interfaces/notaInterface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  public abreForm: boolean = false;
  public tituloPagina: string = "Notas"
  public nota: NotaInterface = {Title:'', Body:''};
  public listaNotas;
  public editando: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webSerrvice: WebserviceProvider) {
  }



  ionViewDidEnter(){
     this.webSerrvice.getNota().subscribe(data => this.listaNotas = data);
    console.log(this.listaNotas);
    if(this.navParams.get('nota')){
      this.AbreFormulario();
      this.nota = this.navParams.get('nota');
    }
  }

  AbreFormulario(){
    console.log("abriu");
    this.editando = false;
    this.nota = {Title:'', Body:''};
    this.abreForm = !this.abreForm;
    if(this.abreForm){
      this.tituloPagina = "Adicionar Notas";
    } else {
      this.tituloPagina = "Notas";
    }
  }

  adicionaNota(){
    console.log(this.nota);
    let nota = this.nota;
    this.nota = {Title:'', Body:''};
    this.abreForm = false;
    this.webSerrvice.addNota(nota).then(data => this.listaNotas.push(data));
  }
  abreDetalhe(nota: NotaInterface){
    this.navCtrl.push(DetalhePage,{nota:nota});
  }

  abreEditarNota(nota: NotaInterface, listaopcoes: ItemSliding){
    this.editando = true;
    listaopcoes.close();
    this.abreForm = true;
    this.nota = nota;
    this.tituloPagina = "Editar Notas";

  }

  editarNota(){
    this.webSerrvice.editaNota(this.nota).then(data => this.atualizaNota(this.nota));
    
  }

  atualizaNota(nota: NotaInterface){
    this.abreForm = false;
    for( let i in this.listaNotas){
      if(this.listaNotas[i].Id == nota.Id){
        this.listaNotas[i] = nota;
      }
    }
  }

  deletarNota(nota: NotaInterface, listaopcoes: ItemSliding){
   listaopcoes.close();
   this.webSerrvice.deletaNota(nota).then(data => this.removeNota(nota));
  }

  removeNota(nota: NotaInterface){
 
    for( let i in this.listaNotas){
      if(this.listaNotas[i].Id == nota.Id){
        this.listaNotas.splice(parseInt(i),1);
      }
    }
  }
}
