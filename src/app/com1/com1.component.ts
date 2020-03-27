import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {

  //**รับข้อมูล */
  @Input('Data') Data :FormData;
  constructor() { }

  ngOnInit() {
  }

}
