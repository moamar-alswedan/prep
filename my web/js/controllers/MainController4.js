app.controller('MainController4', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'Book Cover1', 
    	info: 'logo for technical academy', 
    	cover: 'img/cover/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'Book Cover2',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/cover/image7.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'Book Cover3', 
    	info:'card for city maker indubai', 
    	cover: 'img/cover/image8.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'Book Cover4', 
    	info: 'Book Cover design for organization', 
    	cover: 'img/cover/image4.jpg',
    	likes: 0
  	},
    { 
      name: 'Book Cover5', 
      info: 'logo for technical academy', 
      cover: 'img/cover/image5.jpg',
      likes: 0
    }, 
    { 
      name: 'Book Cover6',  
      info: 'logo for dubai sports confeernce', 
      cover: 'img/cover/image6.jpg',
      likes: 0 
    }, 
    { 
      name: 'Book Cover7', 
      info:'card for city maker indubai', 
      cover: 'img/cover/image2.jpg',
      likes: 0 
    }, 
    { 
      name: 'Book Cover8', 
      info: 'Book Cover design for organization', 
      cover: 'img/cover/image3.jpg',
      likes: 0
    }, 
    { 
      name: 'Book Cover9', 
      info: 'Book Cover design for organization', 
      cover: 'img/cover/image9.jpg',
      likes: 0
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
