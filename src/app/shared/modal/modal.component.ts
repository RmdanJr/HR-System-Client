import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() message: string;
  @Input() onCofirm: Function;

  constructor(private location: Location) {}

  cancel() {
    this.location.back();
  }
}
