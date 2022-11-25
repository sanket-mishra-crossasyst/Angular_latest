import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { ContactsModule } from './contacts/contacts.module';
import { LeadsComponent } from './leads/leads.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
      path :"loans", component : LoansComponent
  },
  {
    path :"leads", component : LeadsComponent
},
{
  path :"authentication", component : 
},
{
  path :"contact", component : LeadsComponent
},
{
  path :"login", component : LoginComponent
},
{
  path :"profile/list-profile", component : ListProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
