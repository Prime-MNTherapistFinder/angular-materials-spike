myApp.controller('MaterialController', ['$mdDialog','DialogService','$mdSidenav','$q','$log',function($mdDialog, DialogService,$mdSidenav, $q, $log) {
    console.log('MaterialController');

    var self = this;




    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    
    // list of states to be displayed
    self.states        = loadStates();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    self.selectedStateArray = selectedStateArray;
    self.newStateArray = []


   

function newState(state) {
    alert("This functionality is yet to be implemented!");
 }
 
 function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) :
       self.states, deferred;
       
    if (self.simulateQuery) {
       deferred = $q.defer();
          
       $timeout(function () { 
          deferred.resolve( results ); 
       }, 
       Math.random() * 1000, false);
       return deferred.promise;
    } else {
       return results;
    }
 }
 
 function searchTextChange(text) {
    $log.info('Text changed to ' + text);
 }
 
 function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
 }
 
 //build list of states as map of key-value pairs
 function loadStates() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
       Wisconsin, Wyoming';
       
    return allStates.split(/, +/g).map( function (state) {
       return {
          value: state.toLowerCase(),
          display: state
       };
    });
 }
 
 //filter function for search query
 function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
       return (state.value.indexOf(lowercaseQuery) === 0);
    };
 }

 function selectedStateArray(item){
     var newStateArray = []
     self.newStateArray.push(item)
     return self.newStateArray;
 }

    

    // self.showAlert = DialogService.showAlert;
    self.showTherapistInfo = DialogService.showTherapistInfo;
    self.answer = DialogService.answer;
    self.close = DialogService.close;
    self.openLeftMenu = DialogService.openLeftMenu;
    // self.querySearch = DialogService.querySearch;
    // self.selectedItemChange = DialogService.selectedItemChange;
    // self.searchTextChange = DialogService.searchTextChange;
    // self.simulateQuery = DialogService.simulateQuery;
    // self.isDisabled = DialogService.isDisabled;
    // self.createFilterFor = DialogService.createFilterFor;
    // self.filter = DialogService.filter;
    // self.repos = DialogService.repos;
    // self.issues = DialogService.issues;

    // self.simulateQuery = false;
    // self.isDisabled = false;
    



}]);