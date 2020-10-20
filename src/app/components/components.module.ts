import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CounterComponent,
    LogInComponent
  ]
})
export class ComponentsModule { }
