var module = angular.module('author.admin', []);

module.run(function () {
    console.log('author.admin is started');
})

module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('admin-some-component', '<div>admin some component (lazy loaded)</div>');
}])

module.service('author.admin.data', function () {
    this.options = {};
})



export default module;