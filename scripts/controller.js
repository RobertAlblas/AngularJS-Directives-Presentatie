angular.module('gezichtenboek').controller('Controller', function(newsService, friendService) {
  var controller = this;

  controller.friends = friendService.query();
  controller.news = newsService.query();
});