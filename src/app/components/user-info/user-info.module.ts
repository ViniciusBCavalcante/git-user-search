import { UserInfoComponent } from './user-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [CommonModule, SkeletonModule],
  exports: [UserInfoComponent],
})
export class UserInfoModule {}
