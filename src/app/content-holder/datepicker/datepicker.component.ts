import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  public datePipe: DatePipe;
  @Output() onDateChange: EventEmitter<String>;
  public bsValue;

  constructor() { 
    this.datePipe = new DatePipe('en-US');
    this.onDateChange = new EventEmitter<String>();
    this.bsValue = this.datePipe.transform(new Date(), "yyyy-ww");
  }

  ngOnInit() {
  }

  onValueChange(value: String): void {
    let date = this.datePipe.transform(value,"yyyy-ww");
    this.onDateChange.emit(date); 
  }

}
