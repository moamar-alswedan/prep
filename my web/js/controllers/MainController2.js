app.controller('MainController2', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'card1', 
    	info: 'logo for technical academy', 
    	cover: 'img/cards/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'card2',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/cards/image8.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'card3', 
    	info:'card for city maker indubai', 
    	cover: 'img/cards/image3.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'card4', 
    	info: 'certificate design for organization', 
    	cover: 'img/cards/image4.jpg',
    	likes: 0
  	},
    { 
      name: 'card5',  
      info: 'certificate design for graduation', 
      cover: 'img/cards/image5.jpg',
      likes: 0 
    },
    { 
      name: 'card6',  
      info: 'brouchour for organization', 
      cover: 'img/cards/image6.jpg',
      likes: 0 
    }, 
    { 
      name: 'card7', 
      info: 'card for ramdan', 
      cover: 'img/cards/image9.jpg',
      likes: 0 
    },
    { 
      name: 'card8',  
      info: 'presonal card', 
      cover: 'img/cards/image2.jpg',
      likes: 0 
    },
    { 
      name: 'card9',  
      info: 'card for ramdan', 
      cover: 'img/cards/image7.jpg',
      likes: 0 
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
