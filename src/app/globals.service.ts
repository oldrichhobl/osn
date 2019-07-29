import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';




import * as JSONdata from "../assets/listdir.json" //You can name 'JSONdata' as you wan
/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public version = '11.05B.2019';
  public server: string = "SERVER PUVODNI";
  public name: string;
  public password: string;
  public rangeValue : number = 500;

  public items: Array<{ title: string; note: string; id:string }> = [];

  public dily = [
{title:"01",name:"A – Alpy",rok:"1888",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
    },    
{title:"02",name:"Alqueire – Ažušak",rok:"1889",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"03",name:"B – Bianchi  ",rk:"1890",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"04",name:"Bianchi-Gioviny– Bžunda  ",rok:"1891",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"05",name:"C – Čechůvky",rok:"1892",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"06",name:"Čechy – Daseur  ",rok:"1893",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"07",name:"Dánsko –Dřevec  ",rok:"1893",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"08",name:"Dřevěn stavby – Falšování  ",rok:"1894",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"09",name:"Falšování potravin a pochutin – Genrista",rok:"1895",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"10",name:"Ges – Hedwigia  ",rok:"1896",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"11",name:"Hédypathie – Hýždě  ",rok:"1897",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"12",name:"Ch – Sv. Jan  ",rok:"1897",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"13",name:"Jana – Kartas  ",rok:"1898",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"14",name:"Kartel – Kraj  ",rok:"1899",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"15",name:"Krajčij – Ligustrum  ",rok:"1900",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"16",name:"Líh – Media  1900",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"17",name:"Median – Navarrete  ",rok:"1901",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"18",name:"Navary – Oživnutí  ",rok:"1902",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"19",name:"P – Pohoř  ",rok:"1902",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"20",name:"Pohora – Q v  ",rok:"1903",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"21",name:"R – Rozkoš  ",rok:"1904",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"22",name:"Rozkošný – Schloppe  ",rok:"1904",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"23",name:"Schlossar – Starowolski  ",rok:"1905",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"24",name:"Staroženské – Šyl  ",rok:"1906",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"25",name:"T – Tzschirner  ",rok:"1906",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"26",name:"U – Vusín  ",rok:"1907",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"27",name:"Vůz – Źyźkowski  ",rok:"1908",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"28",name:"Doplňky  ",rok:"1909 ",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
}

];

  constructor(public storage: Storage,
          private platform: Platform, private file: File,
          private filePath: FilePath,
          private ft: FileTransfer, 
          private spinnerDialog: SpinnerDialog,
          private fileOpener: FileOpener, 
          private globals: GlobalService, 
          public toastController: ToastController,

          private document: DocumentViewer,
    ) {
    console.log('** HELLO GlobalService SERVICE');
    console.log(" JSONdata : ");
    console.dir(JSONdata);
    this.items = JSONdata.FILES.FILE;

  }
  toustError() {
    this.toastController.create({
      message: 'Požadovaný soubor není na serveru www.dramatik.cz.',
      duration: 6000,
      animated: true,
      showCloseButton: true,
      closeButtonText: "OK",
      position: "middle"
    }).then((obj) => {
      obj.present();
    });
  }

  public readGlobals()
  {
       // Or to get a key/value pair
    this.storage.get('server').then((val) => {
       this.server = val;
    });
    this.storage.get('name').then((val) => {
       this.name = val;
    });
    this.storage.get('password').then((val) => {
       this.password = val;
    });
   
  }
  public storeGlobals()
  {
  	this.logGlobals();
  	this.storage.set('server',this.server);
  	this.storage.set('name',this.name);
  	this.storage.set('password',this.password);
  }
  public logGlobals()
  {
  	console.log("*server = " + this.server);
  	console.log("*name = " + this.name);
  	console.log("*password = " + this.password);
  }

//******************************************************
storeFile(pdfFile){

  let exdir =   this.file.externalDataDirectory;
  let downloadUrl = 'https://www.dramatik.cz/osn/' + pdfFile;
// check fileexist
  this.file.checkFile(exdir, pdfFile)
  .then(_ => {
     console.log('LOCALFILE exists'+pdfFile);
     this.fileOpener.open(exdir+pdfFile, 'application/pdf')
        .then(() => console.log('LOCAL file is opened : ' + exdir+pdfFile))
        .catch(e => console.log('LOCAL Error opening file', e));
    })
  .catch(err =>{
    console.log('FILE doesnot exist');
    this.spinnerDialog.show("Minutku", "nahrávám data " + pdfFile, this.spinnerCanceled());
    const transfer = this.ft.create();
    // transfer.onProgress(this.listenerProgress);

    transfer.download(downloadUrl, exdir + pdfFile)
      .then(entry => {
      let url = entry.toURL();
      console.log("URL = "+url);
      this.spinnerDialog.hide();

      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('File is opened ' + url))
        .catch(e => {
                   console.log('Error opening file', e);
                   this.spinnerDialog.hide();
                  }
          );
     }, (error) => {
       console.log('Error download file from dramatik.cz ', error);
                   this.spinnerDialog.hide();
                   this.toustError();
     }
     );
    });  
};


listenerProgress(event)
{
   console.log("listener " +event.loaded);
   console.dir(event);
   if(this.rangeValue === 0)  // prvni volani
   {
    // r1.max = event.total;
     this.rangeValue = event.total;
   }
     this.rangeValue = event.loaded;
};

spinnerCanceled()
{
  console.log(" - spinnerCanceled - ");
  this.spinnerDialog.hide();
};
}
