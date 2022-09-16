import { ReplaceNullPipe } from './../replace-null.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReplaceNullPipe],
  imports: [CommonModule],
  exports: [ReplaceNullPipe],
})
export class ReplaceNullModule {}
