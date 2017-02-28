/**
 * Created by Administrator on 2016/10/3.
 */
myapp.controller("classifyCtrl",function($scope,$state,$ionicViewSwitcher,dataClassify){
    $scope.data = dataClassify.query();

    //console.log($scope.data)

    // 跳转
    $scope.toDetail = function(content){
        $state.go("tabs.style",{style:content.style});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };

});


// $q 是内置服务，所以可以直接使用
// 创建一个Service，它负责从服务器请求商品数据，并全局共享
myapp.factory("productFactory", function ($http, $q) {
    return {
        query: function () {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            $http.get("views/classify/classify.json")
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
                });
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        } // end query
    };
});

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
myapp.factory("dataClassify", function ($http) {
    var data = {classify: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("views/classify/classify.json").success(function (_data, status, headers, config) {
        data.classify = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
