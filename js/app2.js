
var tumblrRefactored = angular.module("tumblrApp", ['ngSanitize']).config(function($sceProvider) {
    $sceProvider.enabled(false);
});
  tumblrRefactored.controller("tumblrController", ['$scope', '$http', function($scope, $http){
    var a = "http://api.tumblr.com/v2/blog/";
    var b = ".tumblr.com/posts/";

      var config ={
              method:"JSONP",
              params:{
                api_key:"ZU4YjeIBXHW91onQlsCnY49JkGCVBsy7PS3iUimxEF6KViYlD4",
                type:'text',
                callback:'JSON_CALLBACK'

              }
        }

    $scope.fetchData = function(type){
      $scope.type = type;
      var url = a + $scope.query + b;
      config.url = url;
      config.params.type = type;
      $http(config).success(function(data){
        console.log("success");
        $scope.blog=data.response.blog;
        $scope.posts=data.response.posts;
        $scope.blogExist = false;
        $scope.content = false;
        if(data.meta.msg=="Not Found"){
          $scope.blogExist = true;
          console.log(data.meta.msg);
          console.log("blog doesn't exist");
        }
        if(data.response.total_posts==0){
          $scope.content = true;
          console.log("empty post");
        }
        console.log(data)});
      
    };
  }])