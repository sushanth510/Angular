import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExponentialstrengthPipe } from './exponentialstrength.pipe';
import { EmployeeDetailsService } from './employee-details.service';
import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { RegisterComponent } from './register/register.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectiveComponent } from './directive/directive.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { HttpClientComponent } from './http-client/http-client.component'
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExponentialstrengthPipe,
    HighlightDirective,
    RegisterComponent,
    ReactiveformsComponent,
    DataBindingComponent,
    PipesComponent,
    DirectiveComponent,
    DependencyInjectionComponent,
    NgOnChangesComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeDetailsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
