"use strict";

angular.module("appApp").controller("ProductCtrl", function ($scope, $http, $routeParams) {
  $http
    .get("http://localhost:3000/products/" + $routeParams.barcode)
    .then(function (res) {
      $scope.product = res.data;
  });
});
