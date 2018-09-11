import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordGuard } from './guard/change-password-guard';
import { SeachStatusComponent } from './seach-status/seach-status.component';
import { ViewRecycleErrorMessagesComponent } from "./view-recycle-error-messages/view-recycle-error-messages.component";
import { JobScheduleComponent } from "./job-schedule/job-schedule.component";
import { GroupMigrationComponent } from "./group-migration/group-migration.component";
import { CaDocDispatchComponent } from "./ca-doc-dispatch/ca-doc-dispatch.component";
import { OnHoldGuard } from './guard/on-hold-guard';
import { EetMainComponent } from "./eet-main/eet-main.component";
import { LoginGuard } from './guard/login-guard';

const routes: Routes = [
  { path: '',               component: LoginComponent,
        canActivate: [LoginGuard] },
  { path: 'eetmain',        component: EetMainComponent },
  { path: 'changepassword', component: ChangePasswordComponent,
        canActivate: [ChangePasswordGuard] },
  { path: 'cadocdispatch',  component: CaDocDispatchComponent ,
        canActivate: [OnHoldGuard] },
  { path: 'searchstatus',   component: SeachStatusComponent },
  { path: 'vieweeterrors',  component: ViewRecycleErrorMessagesComponent },
  { path: 'jobschedule',    component: JobScheduleComponent },
  { path: 'groupmapping',   component: GroupMigrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
