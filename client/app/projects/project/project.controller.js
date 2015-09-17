'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ProjectComponentApi, firebase, $firebaseArray) {

    console.log("routeParams",$routeParams);

    $scope.project = ProjectApi.queryProject($routeParams.projectID);
    //Todo: Project components will go in promise return here

    //Todo: replace dummyId with what comes in project api response. Create promise chain
    $scope.projectComponent = ProjectComponentApi.queryProjectComponent(123);

    $scope.comments = $firebaseArray(firebase.getRef().child($routeParams.projectID).child('comments'));
    $scope.newMessage = {
      text: ""
    }

  });
