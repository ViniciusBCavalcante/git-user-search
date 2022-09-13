import { RepoInfoModule } from './../repo-info/repo-info.module';
import { UserInfoModule } from './../user-info/user-info.module';
import { UserSearchComponent } from './user-search.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [UserSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    UserInfoModule,
    RepoInfoModule,
    ToastModule,
  ],
})
export class UserSearchModule {}
