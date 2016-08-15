angular.module('starter.controllers', [])//模块名称,开始控制器

  .controller('DashCtrl', function ($scope) {//面板控制器


  })
  .controller('ChatsCtrl', function ($scope, Chats) {//聊天控制器
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })
  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {//聊天详情控制器
    $scope.chat = Chats.get($stateParams.chatId);
  })
  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
