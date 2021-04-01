import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExponentialstrengthPipe } from './exponentialstrength.pipe';
import { EmployeeDetailsService } from './employee-details.service';
import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExponentialstrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeDetailsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
