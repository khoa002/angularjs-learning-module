(function() {
    var app = angular.module("githubViewer");
    var ContributorsController = function($scope, github, $routeParams, $sce) {
        github.getContributors($routeParams.user, $routeParams.repo).then(function(data) {
            $scope.repoDetails = data;
        }, function(data) {
            $scope.error = "Request error"
        });
    }
    app.controller("ContributorsController", ContributorsController);
}());