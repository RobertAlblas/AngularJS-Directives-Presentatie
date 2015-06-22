angular.module('gezichtenboek').factory('friendService', ['$resource',
  function($resource){
    return $resource('data/friends.json');
  }]);