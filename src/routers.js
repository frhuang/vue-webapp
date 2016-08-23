export default function(router) {
    router.map({
        '/': {
            name: 'home',
            component: require('./views/Home.vue')
        },
        '/cart': {
            name: 'cart',
            component(resolve){require(['./views/Cart.vue'], resolve)},
        },
        '/me':{
            name: 'me',
            component(resolve){ require(['./views/Me.vue'], resolve)},
            subRoutes: {}
        }
    });

    window.routeList = [];
    window.pageList = ['home', 'cart',  'me'];

    router.beforeEach(function(transition) {
        window.scrollTo(0, 0);
        if(routeList.length > 1 && transition.to.name == routeList[routeList.length - 2]['name']) {
            router.app.effect = 'prev';
            routeList.splice(routeList.length - 1, 1);
            setTimeout(function() {
                transition.next()
            }, 150)
        } else {
            router.app.effect = 'next';
            routeList.push({
                name: transition.to.name,
                path: transition.to.path,
                query: transition.to.query,
                params: transition.to.params,
                timer: +new Date
            });
            transition.next();
        }
        var toPath = transition.to.path;
        if(toPath.replace(/[^/]/g, "").length > 1) {
            router.app.isIndex = false;
        } else {
            router.app.isIndex = true;
        }
    });

    router.afterEach(function(transition) {
        router.app.effect = 'next';
    })
}