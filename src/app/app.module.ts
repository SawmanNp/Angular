import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StarRatingModule } from 'angular-rating-star';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { PanelComponent } from "./components/pages/panel/panel.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { AdvisorsComponent } from "./components/pages/advisors/advisors.component";
import { AdvisorItemComponent } from "./components/advisor-item/advisor-item.component";
import { UpgradeComponent } from "./components/pages/upgrade/upgrade.component";
import { AdvisorViewComponent } from "./components/pages/advisor-view/advisor-view.component";
import { ScheduleComponent } from "./components/pages/schedule/schedule.component";
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { AppointmentsComponent } from './components/pages/appointments/appointments.component';
import { AppointmentItemComponent } from './components/appointment-item/appointment-item.component';
import { DialogOverviewExampleDialog } from './components/appointment-item/appointment-item.component';
import { ScheduleViewComponent } from './components/schedule-view/schedule-view.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { BookingItemComponent } from './components/booking-item/booking-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PanelComponent,
    SidenavComponent,
    AdvisorsComponent,
    AdvisorItemComponent,
    UpgradeComponent,
    AdvisorViewComponent,
    ScheduleComponent,
    ScheduleItemComponent,
    AppointmentsComponent,
    AppointmentItemComponent,
    ScheduleViewComponent,
    BookingComponent,
    BookingItemComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    StarRatingModule,
    TooltipModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent, DialogOverviewExampleDialog]
})
export class AppModule {}
