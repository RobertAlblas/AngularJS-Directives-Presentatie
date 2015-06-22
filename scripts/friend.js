angular.module("gezichtenboek").directive("friend", function() {
	return {
		restrict: 'E',
		scope: {
			src: "="
		}
		templateUrl: "templates/friend.html",
		link: function(scope, element, attrs) {
			var commonFriendsText = element.find("i");

			commonFriendsText.css({'display': 'none'});

			element.bind('mouseover', function() {
				commonFriendsText.css({'display': 'block'});
			});

			element.bind('mouseout', function() {
				commonFriendsText.css({'display': 'none'});
			});
		}
	};
});