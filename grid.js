var app = angular.module('app', []);

app.controller('MyCtrl', function($scope) {
  $scope.customers = [{name:"harsha",place:"belgaum",phoneno:8904898849},
                    {name:"abhishekgouda",place:"hubli",phoneno:890213145},
                    {name:"rahul",place:"hubli",phoneno:8909899888},
                    {name:"rahul",place:"dharwad",phoneno:099867897},
					{name:"rohit",place:"raichur",phoneno:76676713155},
					{name:"harsha",place:"belgaum",phoneno:8904898849},
                    {name:"abhishekgouda",place:"hubli",phoneno:890213145},
                    {name:"rahul",place:"hubli",phoneno:8909899888},
                    {name:"rahul",place:"dharwad",phoneno:099867897},
					{name:"rohit",place:"raichur",phoneno:76676713155},
					{name:"rahul",place:"dharwad",phoneno:099867897},
					{name:"rohit",place:"raichur",phoneno:76676713155}
					];
});


app.directive('createATable', function () {
  return {
    scope: {
      item: '=createATable'
    },
    
    templateUrl: 'gridtemplate.html',
	link:function($scope,element,attributes) {
	     element.css('background-color','red');
         element.css('padding','20px');
		
		 element.css('margin','5px');
		 element.css('width','25%');
		  element.css('height','120px');
	     element.css('float','left');
		 element.bind('mouseenter',function() {
element.css('background-color','grey');
          });
		 element.bind('mouseleave',function() {
element.css('background-color','cyan');
         });



     }
	
	
	
	};
});