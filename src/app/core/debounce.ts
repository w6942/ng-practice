export function debounce(dueTime: number): Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        let timeoutHandle: number | null = null;
        descriptor.value = function () {
            if (timeoutHandle !== null) {
                clearTimeout(timeoutHandle);
            }
            timeoutHandle = setTimeout(() => {
                timeoutHandle = null;
                return method.apply(this, arguments);
            }, dueTime);
        }
    }
}
