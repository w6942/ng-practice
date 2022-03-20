import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    private handleMap: Map<string, DetachedRouteHandle | null> = new Map();

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        const reuseKey: string = route.data?.['reuseKey'];
        if (!reuseKey) {
            return null;
        }
        // @ts-ignore
        return this.handleMap.get(reuseKey);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const reuseKey: string = route.data?.['reuseKey'];
        if (!reuseKey) {
            return false;
        }
        return this.handleMap.has(reuseKey);
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return !!route.data?.['reuseKey'];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        const reuseKey: string = future.data?.['reuseKey'];
        if (!reuseKey) {
            return false;
        }
        return this.handleMap.has(reuseKey);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        console.log(route)
        this.handleMap.set(route.data['reuseKey'], handle);
    }

}
