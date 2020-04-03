import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { DynamicTableService } from './services/dynamic-table.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DynamicTableService], // provide the service here to use it globally //
  bootstrap: [AppComponent]
})
export class AppModule { }
