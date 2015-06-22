angular.module("gezichtenboek").directive("news", function() {
	return {
		scope: {
			src: "="
		},
		templateUrl: "templates/news.html"
	};
});