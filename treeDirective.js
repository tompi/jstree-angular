 app.directive('jstree', function($timeout) {
     return {
         restrict: 'A',
         require: '?ngModel',
         scope: {
             selectedNode: '=',
             childrenUrl: '@',
             selectedNodeChanged: '='
         },
         link: function(scope, element, attrs) {
             var treeElement = $(element);
             var tree = treeElement.jstree({
                 "json_data": {
                     "ajax": {
                         "url": attrs.childrenUrl,
                         "data": function(n) {
                             return {
                                 "operation": "get_children",
                                 "id": n.attr ? n.attr("id").replace("node_", "") : 1
                             };
                         }
                     }
                 },
                 "plugins": ["themes", "json_data", "ui"]
             });
             tree.bind('select_node.jstree', function() {
                 $timeout(function() {
                     scope.selectedNode = {
                         id: treeElement.jstree('get_selected').attr('id'),
                         text: treeElement.find('.jstree-clicked').text()
                     };
                 });
                 if (scope.selectedNodeChanged) $timeout(function() {
                     scope.selectedNodeChanged(scope.selectedNode);
                 });
             });
         }

     };
 });