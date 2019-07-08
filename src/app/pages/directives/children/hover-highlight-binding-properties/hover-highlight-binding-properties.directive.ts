import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlightBindingProperties]'
})
export class HoverHighlightBindingPropertiesDirective implements OnInit {
  // needs initial val
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'lime';

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event): void {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event): void {
    this.bgColor = this.defaultColor;
  }
}
