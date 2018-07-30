import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BisimRoutingModule } from './bisim-routing.module';
import { BisimComponent } from './bisim.component';
import { BicycleService } from './bicycle.service';


@NgModule({
    imports: [CommonModule, BisimRoutingModule, HttpClientModule],
    declarations: [BisimComponent],
    providers: [BicycleService],
})
export class BisimModule {}
