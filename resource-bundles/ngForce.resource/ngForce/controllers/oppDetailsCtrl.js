app.controller('oppDetailsController', function($scope, $dialog, dialog, oppId) {
	$scope.oppId = oppId;
	// log('oppId in oppDetailsCtrl is: ' + oppId);
  $scope.close = function(result){
    dialog.close(result);
  };
});