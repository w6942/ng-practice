import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class LetContext<T> {

    constructor(private readonly letDirective: LetDirective<T>) {
    }

    get $implicit(): T {
        return this.letDirective.let;
    }

    get let(): T {
        return this.letDirective.let;
    }
}

@Directive({
    selector: '[let]'
})
export class LetDirective<T> {

    @Input()
    public let!: T;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {
        // context need a class
        viewContainerRef.createEmbeddedView(templateRef, new LetContext(this));
    }

}
