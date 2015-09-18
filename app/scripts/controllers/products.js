"use strict";

angular.module("appApp").controller("ProductsCtrl", function ($scope, $http, ENV) {
  var apiEndpoint = ENV.API_ENDPOINT;

  $scope.currentPage = 1;
  $scope.itemsPerPage = 20;

  $http
    .get(apiEndpoint + "/products/count")
    .then(function (res) {
      $scope.totalItems = res.data.count;
    });

  $scope.setProducts = function (offset, limit) {
    $http
      .get(apiEndpoint + "/products?offset=" + offset +"&limit=" + limit)
      .then(function (res) {
        $scope.products = res.data;
      });
  };

  $scope.pageChanged = function () {
    $scope.setProducts(($scope.currentPage - 1) * $scope.itemsPerPage, $scope.itemsPerPage);
  };

  $scope.setProducts(0, $scope.itemsPerPage);
});
