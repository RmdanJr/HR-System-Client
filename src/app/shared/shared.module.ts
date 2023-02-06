import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ModalComponent, AlertComponent, SpinnerComponent],
  exports: [ModalComponent, AlertComponent, SpinnerComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
