import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { EventListingCanDeactivateGuardService } from './components/event-listing/event-listing-deactivate.gurad';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';


const routes: Routes = [
  {
    path: 'table', component: DynamicTableComponent
  },
  { path: 'events', 
    component: EventListingComponent,
    canDeactivate: [EventListingCanDeactivateGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
