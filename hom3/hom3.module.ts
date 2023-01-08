import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hom3PageRoutingModule } from './hom3-routing.module';

import { Hom3Page } from './hom3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hom3PageRoutingModule
  ],
  declarations: [Hom3Page]
})
export class Hom3PageModule {}
