app.controller('TreeDemoCtrl', ['$scope', function($scope) {
    $scope.openDialog = function() {
        $scope.dialogOpen = true;
    };
    $scope.closeDialog = function() {
        $scope.dialogOpen = false;
    };
    $scope.jalla = "hei på meg";
    $scope.nodeChanged = function(newVal) {
        alert('You clicked ' + newVal.id);
        $scope.closeDialog();
    };
    
    $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
    };
    $scope.treeUrl = "getchildren.json";
    $scope.treeUrl2 = "getchildren2.json";
}]);