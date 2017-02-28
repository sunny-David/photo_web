/**
 * Created by hxsd on 2016/10/4.
 */
myapp.controller("styleCtrl",function($scope, $stateParams, dataClassify){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)

    var style = $stateParams.style;


    // 查询出来要显示在view中的商品数据
    var data = dataClassify.query();
    angular.forEach(data.classify, function (item) {
        if (item.style == style) {
            $scope.product = item;
            return false;   // 中断forEach循环 <=> break
        }
    });

});
