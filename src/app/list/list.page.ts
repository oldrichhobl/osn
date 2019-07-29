import { Component, OnInit } from '@angular/core';
import { IonicModule,Events } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from "../globals.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
 
  searchTerm: string = '-';
  idx : number = 0;
  currentSelected:number = 0;

  data:any;

  public items: Array<{ title: string; note: string; id:string }> = 
  [
    {title:"title 1", note:"note 1", id:"0101.PDF" },
    {title:"title 2", note:"note 2", id:"0102.PDF" },
    {title:"title 3", note:"note 3", id:"0103.PDF" },
    {title:"title 2", note:"note 2", id:"0102.PDF"},
    {title:"title 3", note:"note 3", id:"0103.PDF" },
    {title:"title 4", note:"note 4", id:"0104.PDF"},
    {title:"title 5", note:"note 5", id:"0105.PDF"}
  ];

  rangeValue: number = 0;

  constructor(
          private route: ActivatedRoute, private router: Router, 
          private globals: GlobalService
          ) 
   {
    console.log("** constructor na list.page.ts **" );
    this.route.queryParams.subscribe(params => {
      console.log("route queryParams ");
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });


   /*
    for (let i = 1; i < hermes.items.length; i++) {
      this.items.push({
        title: hermes.items[i].spz,
        note: ' >' + hermes.items[i].note,
        id: i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }

  ngOnInit() {
    console.log(" ngOnInit na list.page.ts");
    // console.dir(JSONdata);
    //this.items = JSONdata.FILES.FILE;
    // data nactem az po udalosti  data:loaded
    // second page (listen for the user created event)
    // this.events.subscribe('data:loaded', (user, time) => {
      // user and time are the same arguments passed in events.publish(user, time)`
      // console.log('!!! DATA LOADED event', user, 'at', time);
      // ted konecne nactem
      // this.selectNode('//RECS[1]/R');
      // console.log(this.hermes.items.length);
      this.items = this.globals.items;
      // });
  }

  setFilteredItems() {
        this.items = this.filterItems(this.searchTerm);
        console.log(" setFilteredItems na list.page.ts" + this.items);
        console.dir(this.items[0]);
  }
  filterItems(searchTerm){
        return this.globals.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }

  zobrPage(id)
  {
    console.log("zobrPage = " + id );
    this.globals.storeFile(id);

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }


}
