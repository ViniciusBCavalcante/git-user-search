import { RepoInfoModule } from './components/repo-info/repo-info.module';
import { UserInfoModule } from './components/user-info/user-info.module';
import { UserSearchModule } from './components/user-search/user-search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepoInfoComponent } from './components/repo-info/repo-info.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, UserSearchModule, RepoInfoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
