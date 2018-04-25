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

  constructor() { 
    this.datePipe = new DatePipe('en-US');
    this.onDateChange = new EventEmitter<String>();
  }

  ngOnInit() {
  }

  onValueChange(value: String): void {
    let date = this.datePipe.transform(value,"yyyy-ww");
    this.onDateChange.emit(date); 
  }

}
