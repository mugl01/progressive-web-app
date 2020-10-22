import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.css']
})
export class TimerItemComponent implements OnInit {
  @Input() time: string;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
