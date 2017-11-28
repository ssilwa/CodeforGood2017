// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

$( document ).ready(function() {
	var options = {
	  valueNames: [ 'name', 'email', 'phone', 'address', 'task', 'signedup', 'attended', 'contacted', 'transportation' ]
	};
	var userList = new List('users', options);
});


