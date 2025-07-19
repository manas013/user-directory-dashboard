import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent, // Standalone component imported via route
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailModule {}
