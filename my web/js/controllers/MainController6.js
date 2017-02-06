app.controller('MainController6', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'business card1', 
    	info: 'logo for technical academy', 
    	cover: 'img/business card/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'business card2',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/business card/image2.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'business card3', 
    	info:'card for city maker indubai', 
    	cover: 'img/business card/image3.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'business card4', 
    	info: 'Book Cover design for organization', 
    	cover: 'img/business card/image4.jpg',
    	likes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
