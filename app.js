var app = angular.module('treeDemo', ['ui.date']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/a', {templateUrl: 'view1.html',   controller: 'TreeDemoCtrl'}).
      when('/b', {templateUrl: 'view2.html', controller: 'Page2Ctrl'}).
      otherwise({redirectTo: '/a'});
}]);
