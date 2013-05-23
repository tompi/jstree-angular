app.controller('TreeDemoCtrl', ['$scope', function($scope) {
    $scope.test = "hello";
    
    $scope.nodeChanged = function(newVal) {
        alert('You clicked ' + newVal.id);
    };
}]);