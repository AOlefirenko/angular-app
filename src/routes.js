var RoutesConfig = function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            views: {
                '@': {
                    templateUrl: 'src/modules/common/root.partial.html',
                },
                'header@app': {
                    templateUrl: 'src/modules/common/header.partial.html',
                },
                'sidebar@app': {
                    templateUrl: 'src/modules/common/sidebar.partial.html',
                }
            }
        })
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                'content@app': {
                    templateUrl: 'src/modules/dashboard/dashboard.partial.html',
                }
            }
        })
        .state('app.library', {
            url: '/library',
            views: {
                'content@app': {
                    templateUrl: 'src/modules/library/library.partial.html',
                }
            }
        })
        .state('app.reports', {
            url: '/reports',
            views: {
                'content@app': {
                    templateUrl: 'src/modules/reports/reports.partial.html',
                }
            }
        })
        .state('app.admin', {
            url: '/admin',
            views: {
                'content@app': {
                    templateUrl: 'src/modules/admin/admin.partial.html',
                }
            }
        })
}
RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

export default RoutesConfig;