import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerItemComponent } from './timer-item/timer-item.component';

@NgModule({
  declarations: [TimerItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TimerItemComponent
  ]
})
export class SharedModule { }
