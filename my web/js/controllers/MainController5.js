app.controller('MainController5', ['$scope', function($scope) { 

  $scope.products = [
  	{ 
    	name: 'post1', 
    	info: 'logo for technical academy', 
    	cover: 'img/posts/image1.jpg',
    	likes: 0
  	}, 
  	{ 
    	name: 'post2',  
    	info: 'logo for dubai sports confeernce', 
    	cover: 'img/posts/image2.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'post3', 
    	info:'card for city maker indubai', 
    	cover: 'img/posts/image3.jpg',
    	likes: 0 
  	}, 
  	{ 
    	name: 'post4', 
    	info: 'Book Cover design for organization', 
    	cover: 'img/posts/image4.jpg',
    	likes: 0
  	},
    { 
      name: 'post5', 
      info: 'logo for technical academy', 
      cover: 'img/posts/image5.jpg',
      likes: 0
    }, 
    { 
      name: 'post6',  
      info: 'logo for dubai sports confeernce', 
      cover: 'img/posts/image6.jpg',
      likes: 0 
    
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  
}]);
