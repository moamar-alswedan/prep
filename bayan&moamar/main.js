$(document).ready(function() {
    $('.main .btn').click(function() {
        $('.main').slideToggle('slow')
    });
});


var items=[{name:"Bracelet-gold",price:38.25},{name:"bracelet-gold-filled",price:76.5},{name:"Necklace_with_Diamonds",price:55.25},
           {name:"gruop-silver",price:72.25},{name:"Necklace_silver",price:59.5},{name:"Ring_silver",price:51}];

var newArr=[];
var sum=0;

$(document).ready(function(){
    $('#one').click(function(){
       newArr.push(items[0].name);
       sum=sum+items[0].price;
       $('#total').html(sum);
       $('#final').append('<h4 class="app0">'+"- "+items[0].name+'</h4>');
       $(this).css("background-color", "#FF733F")
       $('#one').text('cancel').click(function(){
        newArr.splice(0,1)
        sum=sum-items[0].price
          $('#one').text('add to cart')
          $(this).css("background-color", "#eee")
        $('#total').html(sum)
         $('.app0').remove();
       });
    });
});	

$(document).ready(function(){
    $('#two').click(function(){
       newArr.push(items[1].name)
       sum=sum+items[1].price
       $('#total').html(sum)
       $('#final').append('<h4 class="app1">'+"- "+items[1].name+'</h4>');
       $(this).css("background-color", "#FF733F")
       $('#two').text('cancel').click(function(){
       		$('#two').text('add to cart')
       		$(this).css("background-color", "#eee")
        newArr.splice(0,1)
        sum=sum-items[1].price
	      $('#total').html(sum)
        $('.app1').remove();
       });
    });
});	

$(document).ready(function(){
    $('#three').click(function(){
       newArr.push(items[2].name)
       sum=sum+items[2].price
       $('#total').html(sum)
       $('#final').append('<h4 class="app2">'+"- "+items[2].name+'</h4>');
       $(this).css("background-color", "#FF733F")
       $('#three').text('cancel').click(function(){
       		$('#three').text('add to cart')
       		$(this).css("background-color", "#eee")
        newArr.splice(0,1)
        sum=sum-items[2].price
	      $('#total').html(sum)
        $('.app2').remove();
       });
    });
});	

$(document).ready(function(){
    $('#four').click(function(){
       newArr.push(items[3].name)
       sum=sum+items[3].price
       $('#total').html(sum)
       $('#final').append('<h4 class="app3">'+"- "+items[3].name+'</h4>');
       $(this).css("background-color", "#FF733F")
       $('#four').text('cancel').click(function(){
       		$('#four').text('add to cart')
       		$(this).css("background-color", "#eee")
        newArr.splice(0,1)
        sum=sum-items[3].price
	      $('#total').html(sum)
        $('.app3').remove();
       });
    });
});	

$(document).ready(function(){
    $('#five').click(function(){
       newArr.push(items[4].name);
       sum=sum+items[4].price;
       $('#total').html(sum)
       $('#final').append('<h4 class="app4">'+"- "+items[4].name+'</h4>');
       $(this).css("background-color", "#FF733F");
       $('#five').text('cancel').click(function(){
       		$('#five').text('add to cart');
       		$(this).css("background-color", "#eee");
        newArr.splice(0,1);
        sum=sum-items[4].price;
        $('#total').html(sum);
        $('.app4').remove();
       });
    });
});	

$(document).ready(function(){
    $('#six').click(function(){
       newArr.push(items[5].name);
       sum=sum+items[5].price;
       $('#total').html(sum)
       $('#final').append('<h4 class="app5">'+"- "+items[5].name+'</h4>');
       $(this).css("background-color", "#FF733F")
       $('#six').text('cancel').click(function(){
       		$('#six').text('add to cart');
       		$(this).css("background-color", "#eee");
        newArr.splice(0,1);
        sum=sum-items[5].price;
	      $('#total').html(sum);
        $('.app5').remove();
       });
    });
});	

