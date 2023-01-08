import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hom2PageRoutingModule } from './hom2-routing.module';

import { Hom2Page } from './hom2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hom2PageRoutingModule
  ],
  declarations: [Hom2Page]
})
export class Hom2PageModule {}
