const modal = weex.requireModule('modal');
export default {
    methods: {
        getUrl(name) {
            let platform = WXEnvironment.platform.toLowerCase();
            let platforms = {
                web: "/web/assets/img/",
                android: "local:///",
                ios: "local:///"
            }
            // if (WXEnvironment.platform == 'Android') {
            //     name = name.split('.')[0];
            // }
            name = (platform == 'android') ? name.split('.')[0] : name;
            // modal.toast({ message: name, duration: 5 })
            return platforms[platform] + name
        },
        toVue(vueName) {
            let platform = WXEnvironment.platform.toLowerCase();
            let ip = "192.168.13.12:8081";
            let platforms = {
                // url: "http://192.168.0.100:8081/BottomTab.html",
                // url: "file://assets/dist/BottomTab.js",
                web: `http://${ip}/${vueName}.html`,
                android: `file://assets/dist/${vueName}.js`
            }
            return platforms[platform]
        }

    }
}