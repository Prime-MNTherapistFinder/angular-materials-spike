myApp.service('DialogService', ['$http','$mdDialog','$mdSidenav','$q','$log',function ($http, $mdDialog, $mdSidenav,$q, $log) {
    var vm = this;
    vm.status = '';
    // vm.things = loadAll();
    vm.repos = 'repo, repo1, repo2, repo3, repo4'
    vm.issues = ''



//FOR DIALOG BOXES
    vm.showTherapistInfo = function(event) {
        console.log('showTherapistInfo clicked');
        $mdDialog.show({
          parent: angular.element(document.body),
          templateUrl: '/views/modals/therapistInfo.html',
          controller: 'MaterialController as vm',
          targetEvent: event,
          clickOutsideToClose:true,
          fullscreen: vm.customFullscreen,
        })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
      };

      vm.close = function() {
        $mdDialog.cancel();
      };

// FOR SIDENAV      
    //Documentation: https://material.angularjs.org/latest/api/directive/mdSidenav
      vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };




   
// FOR TYPEAHEAD

vm.searchTextChange = function (text) {
    $log.info('Text changed to ' + text);
 }

 vm.selectedItemChange = function (item) {
    $log.info('Item changed to ' + JSON.stringify(item));
 }
 

var issues = [{
    name: 'issueOne'
},{
    name: 'issueTwo'
},{
    name: 'issueThree'
}]

return {
    loadAll : function(){
        return $q.when(issues)       
    } 
}

   
}]);