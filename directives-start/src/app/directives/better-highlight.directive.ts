import { Directive, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  ngOnInit(): void {
    
  }

  // The argument for the decorator is a specific argument, you cannot write anything there.
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  // The Listener below is also important, as we need it to return the paragraph to transparent background when the mouse leave the paragraph.
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }

}
