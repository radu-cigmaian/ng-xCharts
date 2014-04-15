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
                
                var chart = null;
                
                scope.$watch(attrs.data, function(v) {
                    if (!chart) {
                        chart = new xChart(scope.$eval(attrs.type), v, '#' + elemId, scope.$eval(attrs.opts));
                    } else {
                        chart.setData(v);
                    }
                }, true);
            }
        };
    });
