declare var require: any;

import "./style/base.scss";

import "./style/uikit_base.less";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import Vue from 'vue';

export class Application {

    ///////////////////////////////////////////////////////////////////////////
    // constructor

    constructor() {
        // loads the Icon plugin
        UIkit.use(Icons);
        // components can be called from the imported UIkit reference
        UIkit.notification('Hello world.');
    }

    ///////////////////////////////////////////////////////////////////////////
    // public Method

    public init(): void {
        let _vm = new Vue({
            el: '#vue-app',
            template: require("./Application.html")
        });
    }

}
