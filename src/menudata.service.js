(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q','$http','ApiBasePath'];
function MenuDataService ($q, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    console.log("API Path: " + ApiBasePath + "/categories.json")

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    console.log(response);
    return response;

  }

  service.getItemsForCategory = function (categoryShortName) {
    console.log('getItems Triggered!')
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    });

    console.log(response);
    return response;
  }
}
})();
