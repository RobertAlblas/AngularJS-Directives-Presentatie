angular.module('gezichtenboek').factory('newsService', ['$resource',
  function($resource){
    return $resource('data/news.json');
  }]);