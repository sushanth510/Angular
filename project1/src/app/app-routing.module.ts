import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DirectiveComponent } from './directive/directive.component';
import { HttpClientComponent } from './http-client/http-client.component';

import { PipesComponent } from './pipes/pipes.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  {path:"dataBinding",component:DataBindingComponent},
  {path:"pipes",component:PipesComponent},
  {path:"directives",component:DirectiveComponent},
  {path:"DI",component:DependencyInjectionComponent},
  {path:"http",component:HttpClientComponent},
  {path:"reactiveForms",component:ReactiveformsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
