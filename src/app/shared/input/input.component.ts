import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() id: string;
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
