import { CommonModule } from '@angular/common';
import { Component, computed, ContentChild, signal } from '@angular/core';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-modal',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @ContentChild(ModalHeaderComponent)
  headerComponent?: ModalHeaderComponent;
  @ContentChild(ModalBodyComponent) bodyComponent?: ModalBodyComponent;
  @ContentChild(ModalFooterComponent)
  footerComponent?: ModalFooterComponent;

  // headerAvailable: boolean = false;
  // bodyAvailable: boolean = false;
  // footerAvailable: boolean = false;
  // bodyMessage: string = '';
  // ngAfterContentInit(): void {
  //   this.headerAvailable = !!this.headerComponent;
  //   this.bodyAvailable = !!this.bodyComponent;
  //   this.footerAvailable = !!this.footerComponent;
  // }

  // getBodyMessage() {
  //   if (this.bodyComponent) {
  //     this.bodyMessage = this.bodyComponent.getBodyMessage();
  //   }
  // }

  // ✅ Signals to track availability
  private _headerAvailable = signal(false);
  private _bodyAvailable = signal(false);
  private _footerAvailable = signal(false);

  // ✅ Public computed properties (for template binding)
  headerAvailable = computed(() => this._headerAvailable());
  bodyAvailable = computed(() => this._bodyAvailable());
  footerAvailable = computed(() => this._footerAvailable());

  // ✅ Signal to hold body message
  bodyMessage = signal('');

  ngAfterContentInit(): void {
    this._headerAvailable.set(!!this.headerComponent);
    this._bodyAvailable.set(!!this.bodyComponent);
    this._footerAvailable.set(!!this.footerComponent);
  }

  getBodyMessage() {
    if (this.bodyComponent) {
      this.bodyMessage.set(this.bodyComponent.getBodyMessage());
    }
  }
}
