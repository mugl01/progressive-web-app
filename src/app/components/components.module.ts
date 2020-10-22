import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CounterComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    CounterComponent,
    LogInComponent
  ]
})
export class ComponentsModule { }
