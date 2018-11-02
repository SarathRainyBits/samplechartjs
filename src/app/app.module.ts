import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestChartComponent } from './test-chart/test-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
