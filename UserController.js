(function() {
    var app = angular.module("githubViewer");
    var UserController = function($scope, github, $routeParams) {
        var onUserRequestComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onReposRequestComplete, onRequestError);
        };

        var onReposRequestComplete = function(data) {
            $scope.repos = data;
        };

        var onRequestError = function(reason) {
            $scope.error = "Request error"
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserRequestComplete, onRequestError);
    }
    app.controller("UserController", UserController);
}());