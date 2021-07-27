import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // @Output() firstEvent = new EventEmitter;

  @Input() firstInput = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  // onClick() {
  //   //alert test
    
  //   this.firstEvent.emit('new mesage');
  // }
}
