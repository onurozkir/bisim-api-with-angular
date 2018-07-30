import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BisimComponent } from './bisim.component';

const routes: Routes = [
    {
        path: '',
        component: BisimComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BisimRoutingModule {}
