import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pggg4PageRoutingModule } from './pggg4-routing.module';

import { Pggg4Page } from './pggg4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pggg4PageRoutingModule
  ],
  declarations: [Pggg4Page]
})
export class Pggg4PageModule {}
