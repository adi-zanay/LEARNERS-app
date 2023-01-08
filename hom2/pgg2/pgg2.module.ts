import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pgg2PageRoutingModule } from './pgg2-routing.module';

import { Pgg2Page } from './pgg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pgg2PageRoutingModule
  ],
  declarations: [Pgg2Page]
})
export class Pgg2PageModule {}
