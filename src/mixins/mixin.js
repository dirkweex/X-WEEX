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
        }
    }
}