import 'oclazyload';


function lazySystem ($ocLazyLoad) {
    function load (src, key) {
        return System.import(src).then(function (loadedFile) {
            return $ocLazyLoad.load(loadedFile[key || 'default']);
        });
    }

    this.load = load;
}

var loaderModule = angular
    .module('loaderModule', ['oc.lazyLoad'])
    .service('lazySystem', lazySystem);

export { loaderModule };