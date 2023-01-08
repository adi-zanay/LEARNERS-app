import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pgg3PageRoutingModule } from './pgg3-routing.module';

import { Pgg3Page } from './pgg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pgg3PageRoutingModule
  ],
  declarations: [Pgg3Page]
})
export class Pgg3PageModule {}
