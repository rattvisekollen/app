"use strict";

angular.module("appApp").controller("ProductCtrl", function ($scope, $http, $routeParams, $location, ENV) {
  var apiEndpoint = ENV.API_ENDPOINT;

  $http
    .get(apiEndpoint + "/products/" + $routeParams.barcode)
    .then(function (res) {
      $scope.product = res.data;
    });

  $scope.randomProduct = function () {
    $http
      .get(apiEndpoint + "/products/random")
      .then(function (res) {
        $scope.product = res.data;
      });
  };
});
