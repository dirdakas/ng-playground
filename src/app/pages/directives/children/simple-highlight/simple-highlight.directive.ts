import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appSimpleHighlight]'
})
export class SimpleHighlightDirective implements OnInit {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      '#8e8efb'
    );
  }
}
