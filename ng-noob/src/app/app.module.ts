import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { DynamicTableService } from './services/dynamic-table.service';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { EventListingService } from './services/event-listing.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    EventListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DynamicTableService, EventListingService], // provide the service here to use it globally //
  bootstrap: [AppComponent]
})
export class AppModule { }
