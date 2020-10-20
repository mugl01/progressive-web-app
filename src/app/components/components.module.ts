import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CounterComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CounterComponent,
    LogInComponent
  ]
})
export class ComponentsModule { }
