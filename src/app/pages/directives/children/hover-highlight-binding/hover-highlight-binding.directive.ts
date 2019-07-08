import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlightBinding]'
})
export class HoverHighlightBindingDirective {
  // needs initial val
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  @HostListener('mouseenter') mouseEnter(event: Event): void {
    this.bgColor = '#8e8efb';
  }

  @HostListener('mouseleave') mouseLeave(event: Event): void {
    this.bgColor = 'transparent';
  }
}
