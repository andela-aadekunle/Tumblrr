var tumblrRefactored = angular.module('tumblrApp', []);

  tumblrRefactored.controller('tumblrController', ['$scope', 'tumblrService1', function($scope, tumblrService1) {

    $scope.results = [];

    $scope.fetchDataBlog = function(type) {

      tumblrService1.getBody($scope.text).success(function(data) {

  

          $scope.results = data.response.blog;
          console.log($scope.results);


      });



    };



}]);

tumblrRefactored.factory('tumblrService1', function($http) {

  var serviceItem1 = {};

   


  serviceItem1.getBody = function (query) {
    var a = "http://api.tumblr.com/v2/blog/";
    var b = ".tumblr.com/posts/?";
    var url = a + query + b;

   
    return $http.jsonp( url,  
      {params: {
      
      api_key:"ZU4YjeIBXHW91onQlsCnY49JkGCVBsy7PS3iUimxEF6KViYlD4",
      callback: "JSON_CALLBACK",
      type:'text',



    }});
    


  };

  return serviceItem1;

});