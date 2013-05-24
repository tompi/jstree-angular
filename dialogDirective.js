app.directive('jqueryuiDialog', function ($timeout, $parse) {
    return {
        link: function (scope, element, attrs) {
            // Close button is hidden by default
            var hideCloseButton = attrs.hideCloseButton || true;
            
            // Specify the options for the dialog
            var dialogOptions = angular.extend({
                autoOpen: false,
                width: 350,
                height: 200, 
                draggable: true,
                closeOnEscape: true,
            }, attrs);
           
           // Add the buttons 
           var btnOptions;
           dialogOptions.buttons = [];
           if(attrs.okButton) {
               btnOptions = { 
                   text: attrs.okButton, 
                   click: function() {  $timeout(function() {$parse(attrs.okCallback)(scope);}); }
               };
               dialogOptions.buttons.push(btnOptions);    
           }
           
            if(attrs.cancelButton) {
               btnOptions = { 
                   text: attrs.cancelButton, 
                   click: function() {  $timeout(function() {$parse(attrs.cancelCallback)(scope);}); }
               };
               dialogOptions.buttons.push(btnOptions);    
           }
           var dialog;
           // Initialize the element as a dialog
           // For some reason this timeout is required, otherwise it doesn't work
           // for more than one dialog
           $timeout(function() {
               dialog = $(element).dialog(dialogOptions);
           },0);
            $timeout(function() {
            // This works when observing an interpolated attribute
            // e.g {{dialogOpen}}.  In this case the val is always a string and so
            // must be compared with the string 'true' and not a boolean
            // using open: '@' and open="{{dialogOpen}}"
            attrs.$observe('open', function(val) {
                if (val == 'true') {
                    dialog.dialog("open");
                } 
                else 
                {
                    $(element).dialog("close");
                }
            });
            
            // This allows title to be bound
            attrs.$observe('title', function(val) {
                dialog.dialog("option", "title", val);                   
            });
            });
        } 
    };
});  