import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * 实现路由缓存机制的自定义策略
 * 此片代码基本来自 https://zhuanlan.zhihu.com/p/29823560 的帖子
 * 我在源代码上针对此系统简单业务做了些简单的修改：
 *     针对 /customer/:id 路由，做了一些特定的操作，在存取此路由时，将路由中的 id 参数替换为实际的值，进行存取。
 */
export class RouteCacheReuseStrategy implements RouteReuseStrategy {
    constructor(
    ) {
        // console.log('AppReuseStrategy 构造方法测试');
    }

    public routesCache: { [key: string]: any } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // console.log('判断是否允许复用路由', route);
        return true;
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // console.log('路由离开，存储路由', { route, routesCache: this.routesCache });
        const path = route.routeConfig.path === 'customer/:id' ? 'customer/' + route.params.id : route.routeConfig.path;
        this.routesCache[path] = {
            snapshot: route,
            handle: handle
        };
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // console.log('判断是否允许还原路由', { route, routesCache: this.routesCache });
        const path = route.routeConfig.path === 'customer/:id' ? 'customer/' + route.params.id : route.routeConfig.path;
        return !!this.routesCache[path];
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // console.log('获取存储路由', { route, routesCache: this.routesCache });
        const path = route.routeConfig.path === 'customer/:id' ? 'customer/' + route.params.id : route.routeConfig.path;
        if (route.routeConfig && this.routesCache[path] && this.routesCache[path].handle) {
            return this.routesCache[path].handle;
        } else {
            return null;
        }

    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.log('===========================================================');
        // console.log('进入路由，判断是否同一路由是否复用路由', { future, curr });
        let result = true;
        if (future.routeConfig !== curr.routeConfig) {
            result = false;
        } else if (future.routeConfig && future.routeConfig.path === 'customer/:id' && curr.routeConfig.path === 'customer/:id') {
            if (future.params.id !== curr.params.id) {
                result = false;
            }
        }
        return result;
    }
}
