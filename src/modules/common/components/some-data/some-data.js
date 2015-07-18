import controller from 'src/modules/common/components/some-data/some-data.ctrl'
console.log('controller',controller)

export default function SomeDataDDO() {
    return {
        restrict: 'E',
        templateUrl: 'src/modules/common/components/some-data/some-data.html',
        controller:controller,
        controllerAs:'vm'
    }
}

