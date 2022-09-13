import { SkeletonModule } from 'primeng/skeleton';
import { RepoInfoComponent } from './repo-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [RepoInfoComponent],
  imports: [
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    SkeletonModule,
  ],
  exports: [RepoInfoComponent],
})
export class RepoInfoModule {}
