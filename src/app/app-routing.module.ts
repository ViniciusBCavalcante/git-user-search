import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
  { path: 'user-search', component: UserSearchComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found',
    },
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
