import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppareilComponent } from './components/add-appareil/add-appareil.component';
import { ListAppareilComponent } from './components/list-appareil/list-appareil.component';

const routes: Routes = [
  {path : "add", component:AddAppareilComponent},
  {path:"",component:ListAppareilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
