import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pggg1PageRoutingModule } from './pggg1-routing.module';

import { Pggg1Page } from './pggg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pggg1PageRoutingModule
  ],
  declarations: [Pggg1Page]
})
export class Pggg1PageModule {}
