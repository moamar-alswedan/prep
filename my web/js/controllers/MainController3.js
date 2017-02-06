app.controller('MainController3', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'certificate1', 
    	info: 'logo for technical academy', 
    	cover: 'img/certificate/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'ccertificate2',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/certificate/image3.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'certificate3', 
    	info:'card for city maker indubai', 
    	cover: 'img/certificate/image4.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'certificate3', 
    	info: 'certificate design for organization', 
    	cover: 'img/certificate/image2.jpg',
    	likes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
