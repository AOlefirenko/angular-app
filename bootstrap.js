import {app} from 'src/app'
//import 'src/modules/common/layout.project.less!';

import common from 'src/modules/common/common.module'
import routesConfig from 'src/routes'



app.config(routesConfig);

app.directive('navMenu', common.NavMenuDDO);
app.directive('someData', common.SomeData);


angular.element(document).ready(function () {
    return angular.bootstrap(document.body, [app.name]);
});
