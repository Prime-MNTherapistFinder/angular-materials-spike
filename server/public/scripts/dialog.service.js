myApp.service('DialogService', ['$http','$mdDialog','$mdSidenav',function ($http, $mdDialog, $mdSidenav) {
    var vm = this;
    vm.status = '';

    vm.showAlert = function(event) {
        console.log('Clicked!')
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .title('Hi!!!')
            .textContent('You can say other things')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(event)
        )
    }

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
    
    //Documentation: https://material.angularjs.org/latest/api/directive/mdSidenav
      vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
   
    

   
}]);