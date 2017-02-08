(function() {
    var app = angular.module("githubViewer");
    var MainController = function($scope, $interval, $location) {
        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.doSearch($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountDown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.doSearch = function(username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        }

        $scope.username = "angular";
        $scope.countdown = 120;
        startCountDown();
    };
    app.controller("MainController", MainController);
}());