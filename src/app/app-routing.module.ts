import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionPageComponent } from './modules/session/session-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SessionPageComponent,
    data: { seasonId: 1 } // Better use seasonSlug (string), for example 'summer'
  },
  {
    path: 'winter',
    component: SessionPageComponent,
    data: { seasonId: 2 } // Better use seasonSlug (string), for example 'winter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
