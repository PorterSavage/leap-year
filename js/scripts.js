$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#year").val();

    if ((input % 4 === 0) && (input % 100 !== 0) || (input % 400 === 0)) {
      $("#yes").show();
      $("#no").hide();
    }

    else {
      $("#no").show();
      $("#yes").hide();
    }

  });
});
