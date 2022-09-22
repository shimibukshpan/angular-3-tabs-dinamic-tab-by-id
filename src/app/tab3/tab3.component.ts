import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {
  parameterValue: any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dinamicid()
  }

  dinamicid(){
    this.activatedRoute.params.subscribe((parameter => {
      this.parameterValue = parameter['id'];
      console.log(this.parameterValue);
      
    }))
  }

}
