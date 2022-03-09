import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ClimaService } from './services/clima.service';

import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
