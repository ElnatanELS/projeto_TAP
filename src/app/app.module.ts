import { PrevisaoPage } from './../pages/previsao/previsao';
import { DetalhePage } from './../pages/detalhe/detalhe';
import {  HttpClientModule } from '@angular/common/http';
import { NotasPage } from './../pages/notas/notas';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebserviceProvider } from '../providers/webservice/webservice';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NotasPage,
    DetalhePage,
    PrevisaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NotasPage,
    DetalhePage,
    PrevisaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider
  ]
})
export class AppModule {}
