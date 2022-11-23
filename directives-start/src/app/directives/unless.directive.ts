import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // The name of the input must be the same name than the name of the tag:
  @Input() set appUnless(condition:boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
