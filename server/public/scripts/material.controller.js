myApp.controller('MaterialController', ['$mdDialog','DialogService','$mdSidenav',function($mdDialog, DialogService,$mdSidenav) {
    console.log('MaterialController');

    var vm = this;

    vm.showAlert = DialogService.showAlert;
    vm.showTherapistInfo = DialogService.showTherapistInfo;
    vm.answer = DialogService.answer;
    vm.close = DialogService.close;
    vm.openLeftMenu = DialogService.openLeftMenu;
}]);