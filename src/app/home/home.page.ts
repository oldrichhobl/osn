import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AlertController } from '@ionic/angular';
import { GlobalService } from "../globals.service";

import { ModalDilyPage } from '../modal-dily/modal-dily.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  rangeValue: number = 678;
  // data z modalDilyPage
  dataReturned:any;


  // predavani dat do list.ts 
  // podle  https://ionicacademy.com/pass-data-angular-router-ionic-4/
  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };

dily = [
{title:"01",name:"A – Alpy",rok:"1888",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
    },		
{title:"02",name:"Alqueire – Ažušak",rok:"1889",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"03",name:"B – Bianchi	",rk:"1890",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"04",name:"Bianchi-Gioviny– Bžunda	",rok:"1891",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"05",name:"C – Čechůvky",rok:"1892",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"06",name:"Čechy – Daseur	",rok:"1893",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"07",name:"Dánsko –Dřevec	",rok:"1893",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"08",name:"Dřevěn stavby – Falšování	",rok:"1894",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"09",name:"Falšování potravin a pochutin – Genrista",rok:"1895",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"10",name:"Ges – Hedwigia	",rok:"1896",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"11",name:"Hédypathie – Hýždě	",rok:"1897",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"12",name:"Ch – Sv. Jan	",rok:"1897",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"13",name:"Jana – Kartas	",rok:"1898",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"14",name:"Kartel – Kraj	",rok:"1899",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"15",name:"Krajčij – Ligustrum	",rok:"1900",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"16",name:"Líh – Media	1900",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"17",name:"Median – Navarrete	",rok:"1901",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"18",name:"Navary – Oživnutí	",rok:"1902",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"19",name:"P – Pohoř	",rok:"1902",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"20",name:"Pohora – Q v	",rok:"1903",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"21",name:"R – Rozkoš	",rok:"1904",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"22",name:"Rozkošný – Schloppe	",rok:"1904",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"23",name:"Schlossar – Starowolski	",rok:"1905",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"24",name:"Staroženské – Šyl	",rok:"1906",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"25",name:"T – Tzschirner	",rok:"1906",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"26",name:"U – Vusín	",rok:"1907",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"27",name:"Vůz – Źyźkowski	",rok:"1908",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
},
{title:"28",name:"Doplňky	",rok:"1909 ",
        pages:["0101.PDF","0102.PDF","0103.PDF","0104.PDF","0105.PDF","0106.PDF","0107.PDF","0108.PDF","0109.PDF","0110.PDF"]
}

];


    constructor(private platform: Platform, private file: File,
          private filePath: FilePath,
          private ft: FileTransfer, 
          private fileOpener: FileOpener, private document: DocumentViewer,
          private router: Router,
          public  modalController: ModalController,
          public  globals: GlobalService,
          public  alertCtrl: AlertController
          ) {

  }
  async openModal(dil) {
    const modal = await this.modalController.create({
      component: ModalDilyPage,
      componentProps: dil
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
        if(this.dataReturned !== 'Zrus')  // misto vybraneho dilu tlcitko Zrus
           this.zobrPage(this.dataReturned);
      }
    });
 
    return await modal.present();
  }



  openDetailsWithState(name) {
  	console.log("openDetailsWithState()");
  	this.user.name = name;
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['list'], navigationExtras);
  }

  openLocalPdf() {
  	console.log("openLocalPdf ");
    let filePath = this.file.applicationDirectory + 'www/assets';
  	console.log("filePath = " + filePath);
  	console.log("this.platform.is('android') = " + this.platform.is('android'));

    if (this.platform.is('android')) {
       console.log("ANDROID openLocalPDF");	
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'test.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'Ottův slovník naučný'
      }
      this.document.viewDocument(`${filePath}/test.pdf`, 'application/pdf', options);
    }
  }

downloadAndOpenPdf() {
  console.log("downloadAndOpenPdf ");
  let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();

  transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
    let url = entry.toURL();
    console.log("URL = "+url);
    if (this.platform.is('ios')) {
      this.document.viewDocument(url, 'application/pdf', {});
    } else {
      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('File is opened ' + url))
        .catch(e => console.log('Error opening file', e));
    }
  });
}  


downloadAndOpenPdfInterni() {
  console.log("downloadAndOpenPdfInterni ");
  // let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  let odPath = this.file.applicationDirectory;
  let doPath = this.file.dataDirectory;
  console.log(odPath + "  --  " + doPath); 
  this.filePath.resolveNativePath(this.file.applicationDirectory + "www/assets/").
       then(filePath => 
  {
  console.log("filePath pro copy = "+filePath);	
  this.file.copyFile(filePath, "test.pdf",doPath,'myfile.pdf').then(entry => {
    let url = entry.toURL();
    console.log("URL interni = "+url);
    if (this.platform.is('ios')) {
      this.document.viewDocument(url, 'application/pdf', {});
    } else {
      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('File OPENER is opened ' + url))
        .catch(e => console.log('Error OPENER opening file', e));
    }
   }).catch(err => {console.log("Chyba copyFile: ");
                    console.dir(err)  
                   }
           )         

  }).catch(err => console.log(err));
}  

openAssetPdf(pdfFile){
  let options: DocumentViewerOptions = {
  title: 'Moje PDF'
  }	
  this.document.viewDocument('file:///android_asset/www/assets/test.pdf', 
  	'application/pdf', 
  	{})

}

openAssetPdfOpener(pdfFile){
	// let url = "file:///android_asset/www/assets/0101.pdf";  applicationDirectory
	// let path = this.file.dataDirectory;
	let path = this.file.applicationDirectory;
	console.log("openAPO applicationDirectory= "+ path);
	let url = path + "www/assets/test.pdf";
	console.log("openAPO url = "+ url);
	console.dir(this.file);
	console.log("dataDirectory = "+ this.file.dataDirectory);
// check fileexist
  this.file.checkFile(this.file.applicationDirectory+"www/assets/", "test.pdf").then(_ => console.log('FILE exists')).catch(err =>
  console.log('FILE doesnot exist'));


      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('OPENER File is opened'))
        .catch(e => console.log('OPENER Error opening file', e));

}

//******************************************************
storeFile(pdfFile){
  let exdir = 	this.file.externalDataDirectory;
  let downloadUrl = 'https://www.dramatik.cz/osn/' + pdfFile;
  const transfer = this.ft.create();
  // transfer.onProgress(this.listenerProgress);
  this.rangeValue = 1670730;

  transfer.download(downloadUrl, exdir + pdfFile).then(entry => {
    let url = entry.toURL();
    console.log("URL = "+url);

      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('File is opened ' + url))
        .catch(e => console.log('Error opening file', e));
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

 showAlert(){
  this.alertCtrl.create({
    header: "Stav",
    subHeader: "Načíst znovu ?",
    message:"globals.items: "+ this.globals.items.length+
            " server: "+this.globals.server
    ,
    buttons: [
        {
    	 text:'Ano',
    	 role:'cancel',
    	 handler: () => {console.log("BLAH = ");}
         },
         {
    	 text:'Ne',
    	 role:'ok',
    	 handler: () => {console.log("BLAH = ");}
         }
    	 ]
  }).then(alert => alert.present())
}

  zobrPage(id)
  {
    console.log("zobrPage = " + id );
    this.globals.storeFile(id);

  }

}


