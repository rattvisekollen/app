"use strict";

angular.module("appApp", [
  "config",
  "ngRoute",
  "ui.bootstrap"
])
  .config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  })
  .config(function($routeProvider) {
    $routeProvider
      .when("/products", {
        templateUrl: "views/products.html",
        controller: "ProductsCtrl"
      })
      .when("/products/:barcode", {
        templateUrl: "views/product.html",
        controller: "ProductCtrl"
      })
      .otherwise({
        redirectTo: "/products"
      });
  });
