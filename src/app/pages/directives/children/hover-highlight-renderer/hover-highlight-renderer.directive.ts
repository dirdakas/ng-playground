import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlightRenderer]'
})
export class HoverHighlightRendererDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('mouseenter') mouseEnter(event: Event): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      '#8e8efb'
    );
  }

  @HostListener('mouseleave') mouseLeave(event: Event): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
