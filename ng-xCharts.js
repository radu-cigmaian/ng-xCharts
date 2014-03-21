angular.module('ng-xCharts', [])
  .directive('xchart', function () {
    return {
      restrict: 'EACM',
      template: '<figure></figure>',
      replace: true,
      link: function (scope, elem, attrs) {
          new xChart(scope.$eval(attrs.type), scope.$eval(attrs.data), '#'+attrs.id, scope.$eval(attrs.opts));
      }
    };
  });