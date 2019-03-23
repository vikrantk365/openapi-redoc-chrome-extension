import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Doc1Component } from './doc1/doc1.component';
import { Doc2Component } from './doc2/doc2.component';
import { DifferenceComponent } from './difference/difference.component';


const routes: Routes = [
  { path: 'one', component: Doc1Component },
  { path: 'two', component: Doc2Component },
  { path: 'diff', component: DifferenceComponent },
  { path: '',   redirectTo: '/one', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
