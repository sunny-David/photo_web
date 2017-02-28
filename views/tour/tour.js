/**
 * Created by hxsd on 2016/10/4.
 */
myapp.controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.config={enter:false};

    $scope.onSlideChange=function(){
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.config.enter=true;
        }else{
            $scope.config.enter=false;
        };
    };
});
