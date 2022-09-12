import { RepoInfoComponent } from './repo-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [RepoInfoComponent],
  imports: [CommonModule, TableModule],
  exports: [RepoInfoComponent],
})
export class RepoInfoModule {}
