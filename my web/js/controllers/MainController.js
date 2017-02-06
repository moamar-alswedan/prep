app.controller('MainController', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'company logo', 
    	info: 'logo for technical academy', 
    	cover: 'img/logos/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'goverment log',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/logos/image2.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'goverment card', 
    	info:'card for city maker indubai', 
    	cover: 'img/logos/image3.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'certificate', 
    	info: 'certificate design for organization', 
    	cover: 'img/logos/image4.jpg',
    	likes: 0
  	},
    { 
      name: 'certificate',  
      info: 'certificate design for graduation', 
      cover: 'img/logos/image5.jpg',
      likes: 0 
    },
    { 
      name: 'brouchour',  
      info: 'brouchour for organization', 
      cover: 'img/logos/image6.jpg',
      likes: 0 
    }, 
    { 
      name: 'card', 
      info: 'card for ramdan', 
      cover: 'img/logos/image7.jpg',
      likes: 0 
    },
    { 
      name: 'card',  
      info: 'presonal card', 
      cover: 'img/logos/image8.jpg',
      likes: 0 
    },
    { 
      name: 'card',  
      info: 'card for ramdan', 
      cover: 'img/logos/image9.jpg',
      likes: 0 
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
