function equalheight(selector){
  $(selector + ' .content-container:not(:has(.mp))').each(function() {
    // Wrap inner content with something to measure on.
    $(this).wrapInner($('<div>', {'class': 'mp'}));
  });
  var $elements = $(selector),
      $container = $elements.parent('.equal-height');
  if ($container[0] && $elements.length > 0) {
    var containerWidth = $container.outerWidth();
    var currentTotalWidth = 0;
    var rowElements = [];
    var maxHeight = 0;
    $elements.each(function() {
      var $el = $(this);
      var width = $el.outerWidth();
      var height = $('.mp', $el).outerHeight();
      currentTotalWidth += width;
      // Check for new row by checking the combined width.
      if (currentTotalWidth >= containerWidth) {
        $.each(rowElements, function(i, el) {
          $('.content-container', el).css('min-height', maxHeight);
        });
        currentTotalWidth = width;
        maxHeight = height;
        rowElements = [];
      }
      maxHeight = Math.max(maxHeight, height);
      rowElements.push($el);
    });
    // And for the last row.
    $.each(rowElements, function(i, el) {
      $('.content-container', el).css('min-height', maxHeight);
    });
  }
}
