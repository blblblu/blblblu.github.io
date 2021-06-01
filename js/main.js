function initMasonry() {
  var $grid = $('.portfolio-grid').masonry({
    itemSelector: ".portfolio-grid-item",
    //columnWidth: 300,
    gutter: 0
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
}

initMasonry();