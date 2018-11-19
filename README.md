# RouteCacheReuseStrategy

angular 6.0.3
基于自定义路由重用策略实现标签页系统效果

## 基于路由重用策略实现对路由的缓存

主要代码在 `app/app.reuseStrategy.ts` 中，继承了 `angular` 提供的 `RouteReuseStrategy` 机制，参照知乎上的思路 `https://zhuanlan.zhihu.com/p/29823560` 实现了对访问过路由的缓存。

用了一个操作标签页数据的服务 `app/service/tabNav.service.ts` 来管理标签页的数据。在页面导航条组件 `app/layout/header/header.component.ts` 中，注入此服务，使用标签数据渲染页面。

## 开发环境启动项目

终端执行 `ng serve` 可启动开发服务。 访问地址为 `http://localhost:4200/`。 启用了热加载，如果更改任何源文件，应用程序将自动重新加载。

## 打包项目

终端执行 `ng build` 可打包项目。 The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
