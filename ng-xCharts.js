
angular.module('ng-xCharts', [])
    .directive('xchart', function () {
        var graphIdCount = 0;
        return {
            restrict: 'EACM',
            template: '<figure></figure>',
            replace: true,

            link: function (scope, elem, attrs) {
                var elemId;
                if(!(elemId = elem.attr('id'))){
                    graphIdCount++;
                    elemId = 'graph-' + graphIdCount;
                    elem.attr('id', elemId);
                }
                new xChart(scope.$eval(attrs.type), scope.$eval(attrs.data), '#' + elemId, scope.$eval(attrs.opts));
            }
        };
    });