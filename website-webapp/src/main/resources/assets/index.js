import "./style/base.scss";

import "./style/uikit_base.less";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

window.onload = function () {
    // loads the Icon plugin
    UIkit.use(Icons);
    // components can be called from the imported UIkit reference
    UIkit.notification('Hello world.');
}