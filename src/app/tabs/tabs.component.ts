import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() clickTab = new EventEmitter<string>()
  // selectedTab:string='tab-1'
  // selectTab(tab:string){
  //   this.selectedTab = tab;
  //   this.clickTab.emit(tab);
  // }
}
