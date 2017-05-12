function changeMenu(x) {
    x.classList.toggle("change");
    document.getElementById("mySidenav").classList.toggle("navOpen");
    document.getElementById("everything").classList.toggle("navOpen");
}

$(document).ready(function() {
    // Set testimonialSelect same height
    var maxHeight = 0;
    $('.testimonialSelect').each(function() {
      var divHeight = $(this).height();
      if (maxHeight == 0 || maxHeight < divHeight) maxHeight = divHeight;
    });

    $('.testimonialSelect').height(maxHeight);

    // Set tourText same height
    maxHeight = 0;
    $('.tourText').each(function() {
      var divHeight = $(this).height();
      if (maxHeight == 0 || maxHeight < divHeight) maxHeight = divHeight;
    });

    $('.tourText').height(maxHeight);
});
