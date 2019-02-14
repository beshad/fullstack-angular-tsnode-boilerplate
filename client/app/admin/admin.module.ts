import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule,NbAccordionModule } from '@nebular/theme';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NbAccordionModule
  ],
  exports: [
    NbLayoutModule,
    NbButtonModule,
    NbAccordionModule
  ]
})
export class AdminModule { }
