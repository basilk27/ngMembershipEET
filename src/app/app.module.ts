import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EetMainComponent } from './eet-main/eet-main.component';
import { SeachStatusComponent } from './seach-status/seach-status.component';
import { CaDocDispatchComponent } from './ca-doc-dispatch/ca-doc-dispatch.component';
import { ViewRecycleErrorMessagesComponent } from './view-recycle-error-messages/view-recycle-error-messages.component';
import { RecycleMessagesComponent } from './recycle-messages/recycle-messages.component';
import { JobScheduleComponent } from './job-schedule/job-schedule.component';
import { GroupMigrationComponent } from './group-migration/group-migration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordGuard } from './guard/change-password-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EetMainComponent,
    SeachStatusComponent,
    CaDocDispatchComponent,
    ViewRecycleErrorMessagesComponent,
    RecycleMessagesComponent,
    JobScheduleComponent,
    GroupMigrationComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChangePasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
