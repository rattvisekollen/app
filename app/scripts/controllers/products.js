"use strict";

angular.module("appApp").controller("ProductsCtrl", function ($scope, $http) {
  $scope.currentPage = 1;
  $scope.itemsPerPage = 20;

  $http
    .get("http://localhost:3000/products/count")
    .then(function (res) {
      $scope.totalItems = res.data.count;
    });

  $scope.setProducts = function (offset, limit) {
    console.log("Setting products " + offset + " " + limit);
    $http
      .get("http://localhost:3000/products?offset=" + offset +"&limit=" + limit)
      .then(function (res) {
        console.log("Products set");
        console.log(res.data);
        $scope.products = res.data;
      });
  };

  $scope.pageChanged = function () {
    console.log("Page changed");
    $scope.setProducts(($scope.currentPage - 1) * $scope.itemsPerPage, $scope.itemsPerPage);
  };

  $scope.setProducts(0, $scope.itemsPerPage);
});
