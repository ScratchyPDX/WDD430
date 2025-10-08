import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: false
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: Boolean = false;
  @HostListener('click', ['$event']) toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
