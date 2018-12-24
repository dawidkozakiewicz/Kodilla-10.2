var span = $("span");
// span.each(function(index, element) {});

span.each(function (index, boo) {
  if (index % 2 == 0) {
    $(boo).css('color', '#fff900');
  };
});

var paragraphs = $('p');
paragraphs.each(function (index, foo) {

  var button = '<button class="btn" cokolwiek="' + index + '">Click me</button>';
  $(foo).append(button);

});

$('button').click(function () {
  alert($(this).attr("cokolwiek"));
});


