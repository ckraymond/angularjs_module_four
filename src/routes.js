(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

  //redirect to the home page
  $urlRouterProvider.otherwise('/');

  //set up the states
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })

  .state('categoriesList',{
    url: '/categories',
    templateUrl: 'templates/categories-list.view.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoriesList.itemDetail',{
    url: '/items/{categoryShortName}',
    templateUrl: 'templates/items-list.view.html',
    controller: 'ItemsController as itemList',
    params: {
      categoryShortName: null
    },
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
