import { Injectable } from '@angular/core';
import { Router, ActivationEnd, RouteReuseStrategy } from '@angular/router';

/**
 * tab 组件服务
 */
@Injectable()
export class TabNavService {
    constructor(
        private router: Router,
        private routeReuseStrategy: RouteReuseStrategy
    ) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof ActivationEnd) { // 当导航成功结束时执行
                    const path =
                     event.snapshot.routeConfig.path === 'customer/:id' ?
                      'customer/' + event.snapshot.params.id :
                      event.snapshot.routeConfig.path;
                    const title = event.snapshot.data.title;
                    const canClose = event.snapshot.data.canClose;
                    if (!this.tabNavs.find((nav) => nav.path === path)) {
                        this.tabNavs.push({ 'path': path, 'title': title, 'canClose': canClose });
                    }
                    this.tabNavs.forEach((nav) => {
                        if (nav.path === path) {
                            nav.isAction = true;
                        } else {
                            nav.isAction = false;
                        }
                    });
                }
            });
    }

    public tabNavs = [];

    public setTabNav(path, title) {
        if (!this.tabNavs.find((nav) => nav.path === path)) {
            this.tabNavs.push({ 'path': path, 'title': title });
        } else {
            this.tabNavs.forEach(nav => {
                if (nav.path === path) {
                    nav.title = title;
                }
            });
        }
    }

    public removeTabNav(path) {
        this.tabNavs.forEach((nav, index) => {
            if (nav.path === path) {
                if (nav.isAction) {
                    if (this.tabNavs.length === 1) {
                        this.router.navigateByUrl('/home');
                    } else if (this.tabNavs[index + 1]) {
                        this.router.navigateByUrl(this.tabNavs[index + 1].path);
                    } else if (this.tabNavs[index - 1]) {
                        this.router.navigateByUrl(this.tabNavs[index - 1].path);
                    }
                }


                this.tabNavs.splice(index, 1);
            }
        });
        if (this.routeReuseStrategy.routesCache[path]) {
            delete this.routeReuseStrategy.routesCache[path];
        }
    }
}
