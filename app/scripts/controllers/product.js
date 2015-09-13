"use strict";

angular.module("appApp").controller("ProductCtrl", function ($scope, $http, $routeParams, ENV) {
  var apiEndpoint = ENV.API_ENDPOINT || "http://localhost:3000";

  $http
    .get(apiEndpoint + "/products/" + $routeParams.barcode)
    .then(function (res) {
      $scope.product = res.data;
  });
});
