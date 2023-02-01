import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModalComponent, AlertComponent],
  exports: [ModalComponent, AlertComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
