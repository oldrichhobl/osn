import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import { File } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import * as JSONdata from "../assets/listdir.json";
import { IonicStorageModule } from '@ionic/storage';

import { ModalDilyPageModule } from './modal-dily/modal-dily.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, 
             IonicModule.forRoot(), 
             AppRoutingModule,
             ModalDilyPageModule, 
             IonicStorageModule.forRoot()
           ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FilePath,
    FileOpener,
    FileTransfer,
    SpinnerDialog,
    DocumentViewer
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
