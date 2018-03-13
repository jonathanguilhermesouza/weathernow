angular.module('weatherNow').directive('colorWeather', function(){
    return {
      restrict: 'A',
      link: function ($scope, element, attrs) {

        var temperature = parseInt(attrs.colorWeather);
       
        if(temperature <= 5)
            element.attr('class', 'temparature-baixa');
        else if(temperature >= 6 && temperature <= 25)
            element.attr('class', 'temparature-media');
        else if(temperature >= 26)
            element.attr('class', 'temperature-alta');
      }
    };
});
