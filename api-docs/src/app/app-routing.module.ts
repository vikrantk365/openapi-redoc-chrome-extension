import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Doc1Component } from './doc1/doc1.component';
import { Doc2Component } from './doc2/doc2.component';


const routes: Routes = [
  { path: 'one', component: Doc1Component },
  { path: 'two', component: Doc2Component },
  { path: '',   redirectTo: '/one', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
