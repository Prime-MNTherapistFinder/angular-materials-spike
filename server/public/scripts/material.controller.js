myApp.controller('MaterialController', ['$mdDialog','DialogService','$mdSidenav','$q','$log',function($mdDialog, DialogService,$mdSidenav, $q, $log) {
    console.log('MaterialController');

    var self = this;

    self.showTherapistInfo = DialogService.showTherapistInfo;
    self.answer = DialogService.answer;
    self.close = DialogService.close;
    self.openLeftMenu = DialogService.openLeftMenu;

    

    self.selectedItemChange = DialogService.selectedItemChange;
    self.searchTextChange   = DialogService.searchTextChange;
    self.selectedIssuesArray = selectedIssuesArray;
    self.newIssue = newIssue;
    self.newStateArray = []

DialogService
.loadAll()
.then( function( issues ) {
    self.issues    = [].concat(issues);
    self.selected = issues[0];
});


   

function newIssue(issue) {
    alert("You must pick issues from the list.");
 }
 


 function selectedIssuesArray(item){
     var newStateArray = []
     self.newStateArray.push(item)
     return self.newStateArray;
 }

    





}]);