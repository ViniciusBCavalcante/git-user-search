import { LocalService } from './shared/services/local-storage/local.service';
import { RepoInfoModule } from './components/repo-info/repo-info.module';
import { UserInfoModule } from './components/user-info/user-info.module';
import { UserSearchModule } from './components/user-search/user-search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserSearchModule,
    UserInfoModule,
    RepoInfoModule,
  ],
  providers: [LocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
