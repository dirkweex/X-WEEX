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
        // toVue(url){
        //     let platform =WXEnvironment.platform.toLowerCase();
        //     let platform = {
        //         // url: "http://192.168.0.100:8081/BottomTab.html",
        //         // url: "file://assets/dist/BottomTab.js",
        //         web:""
        //     }
        // }
        
    }
}