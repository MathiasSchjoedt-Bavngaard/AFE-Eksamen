import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickComponent } from './pick/pick.component';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
  {
    path: 'Lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'Pick',
    component: PickComponent,
    title: 'Pick a number',
  },
  {
    path: 'Pick/:number',
    component: NumberComponent,
    title: 'You picked a number',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
