import { ReplaceNullModule } from './../../shared/pipes/replace-null/replace-null.module';
import { ReplaceNullPipe } from './../../shared/pipes/replace-null.pipe';
import { UserInfoComponent } from './user-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [CommonModule, SkeletonModule, ReplaceNullModule],
  exports: [UserInfoComponent],
})
export class UserInfoModule {}
