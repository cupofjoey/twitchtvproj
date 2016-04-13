var users = ["freecodecamp", "storbeck","terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404", "esl_sc2"];
var api = 'https://api.twitch.tv/kraken/streams/';


var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope, $http) {  
  $scope.results = [];
  $scope.user;
  for(var i = 0; i < users.length; i++) {
    user = users[i];
    $http.get(api + user)    
    .success((function(user){
      return function(data) {
        data.user = user;        
        $scope.results.push(data);
      }
    })(user))
    .error((function(user){
      return function(errorObject) {
        errorObject.user = user;
        $scope.results.push(errorObject);
      }
    })(user));
  }  
});