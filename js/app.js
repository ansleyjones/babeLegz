angular.module("tbdModules", ["tbdModules.controllers","tbdModules.services", "ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .when("/timeline",
      {
        templateUrl: "views/timeline.html",
        controller: "timeController"
      })
      .when("/gifts",{
        templateUrl: "views/gifts.html",
        controller: "giftController"
      })
      .otherwise({
        redirectTo: "/notFound"
      })

  });

  angular.module("tbdModules.controllers", []);
  angular.module("tbdModules.services", []);
