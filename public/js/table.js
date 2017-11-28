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

	var f_sl = 1;
	var f_nm = 1;
	$("#name").click(function(){
	    f_sl *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_sl,n);
	});
	$("#email").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#phone").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#address").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#task").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#signedup").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#attended").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#contacted").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
	$("#transportation").click(function(){
	    f_nm *= -1;
	    var n = $(this).prevAll().length;
	    sortTable(f_nm,n);
	});
});

function sortTable(f,n){
	var rows = $('#datatable2 tbody  tr').get();

	rows.sort(function(a, b) {

		var A = getVal(a);
		var B = getVal(b);

		if(A < B) {
			return -1*f;
		}
		if(A > B) {
			return 1*f;
		}
		return 0;
	});

	function getVal(elm){
		var v = $(elm).children('td').eq(n).text().toUpperCase();
		if($.isNumeric(v)){
			v = parseInt(v,10);
		}
		return v;
	}

	$.each(rows, function(index, row) {
		$('#datatable2').children('tbody').append(row);
	});
}