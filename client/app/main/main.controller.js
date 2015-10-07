'use strict';

angular.module('itosApp')
  .controller('MainCtrl', function ($scope, $http, $location, $sce) {
    $scope.active = angular.lowercase($location.search().content || 'about');
    console.log($scope.active);
    console.log($location.search());

    $scope.things = [
      {
        link:'https://github.com/rcos/CSCI2961-01',
        name: 'View it on GitHub'
      }
    ];

    $scope.resources = [
      {
        link:'about',
        name: 'About'
      },
      {
        link:'howto',
        name: 'Howto'
      },
      {
        link:'lectures',
        name: 'Lectures'
      },
      {
        link:'labs',
        name: 'Labs'
      },
      {
        link:'outlines',
        name: 'Outlines'
      }
    ];
    $scope.classContentText = [];
    if ($scope.active === 'about'){
      $http.get('https://raw.githubusercontent.com/rcos/CSCI2961-01/master/README.md').then(function(response) {
          var req = {
            'text': response.data,
            'mode': 'markdown',
            'context': 'rcos/CSCI2961-01'
          };
          console.log(req);
          $http.post('https://api.github.com/markdown',req).then(function(response) {
            $scope.classContentText.push($sce.trustAsHtml(response.data));
            $http.get('https://raw.githubusercontent.com/rcos/CSCI2961-01/master/Syllabus.md').then(function(response) {
                var req = {
                  'text': response.data,
                  'mode': 'markdown',
                  'context': 'rcos/CSCI2961-01'
                };
                console.log(req);
                $http.post('https://api.github.com/markdown',req).then(function(response) {
                  $scope.classContentText.push($sce.trustAsHtml(response.data));
                });

            });

          });

      });
    }


  });
