/**
 * Created by hxsd on 2016/10/4.
 */
myapp.controller("briefCtrl",function($scope, $stateParams, dataCameraman){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)

    var name = $stateParams.name;

    console.log(name)

    // 查询出来要显示在view中的商品数据
    var data = dataCameraman.query();
    angular.forEach(data.cameraman, function (item) {
        if (item.name == name) {
            $scope.product = item;
            return false;   // 中断forEach循环 <=> break
        }
    });

});

