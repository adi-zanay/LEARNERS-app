import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg2PageRoutingModule } from './pg2-routing.module';

import { Pg2Page } from './pg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg2PageRoutingModule
  ],
  declarations: [Pg2Page]
})
export class Pg2PageModule {}
