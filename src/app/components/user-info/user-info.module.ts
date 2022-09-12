import { ReplaceNullPipe } from './../../shared/pipes/replace-null.pipe';
import { UserInfoComponent } from './user-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [UserInfoComponent, ReplaceNullPipe],
  imports: [CommonModule, SkeletonModule],
  exports: [UserInfoComponent],
})
export class UserInfoModule {}
