(function() {
    var github = function($http, $log) {
        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        };
        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        };
        var getContributors = function(username, repo) {
            var result;
            var repoUrl = "https://api.github.com/repos/" + username
                              + "/" + repo;
            return $http.get(repoUrl)
                .then(function(response) {
                    result = response.data;
                    return $http.get(repoUrl + "/contributors");
                })
                .then(function(response){
                    result.contributors = response.data;
                    return result;
                });
        };
        return {
            getUser: getUser,
            getRepos: getRepos,
            getContributors: getContributors
        };
    };
    var module = angular.module("githubViewer");
    module.factory("github", github);
}());