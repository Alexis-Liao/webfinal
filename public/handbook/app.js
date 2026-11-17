(function () {
  'use strict';

  var TOTAL = 16;
  var current = 1;
  var animating = false;
  var touchStartX = 0;
  var touchStartY = 0;
  var hasMoved = false;

  var page = document.getElementById('page');
  var pageImage = document.getElementById('pageImage');
  var currentPage = document.getElementById('currentPage');
  var pageSlider = document.getElementById('pageSlider');
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');
  var tapPrev = document.getElementById('tapPrev');
  var tapNext = document.getElementById('tapNext');
  var bookArea = document.getElementById('bookArea');
  var zoomModal = document.getElementById('zoomModal');
  var zoomImage = document.getElementById('zoomImage');
  var zoomScroller = document.getElementById('zoomScroller');
  var helpModal = document.getElementById('helpModal');

  function pathFor(number) {
    return 'assets/pages/page-' + String(number).padStart(2, '0') + '.jpg';
  }

  function preload(number) {
    if (number < 1 || number > TOTAL) return;
    var img = new Image();
    img.src = pathFor(number);
  }

  function syncUi() {
    currentPage.textContent = String(current);
    pageSlider.value = String(current);
    pageImage.alt = '第 ' + current + ' 页，共 ' + TOTAL + ' 页';
    prevButton.disabled = current === 1;
    tapPrev.disabled = current === 1;
    nextButton.disabled = current === TOTAL;
    tapNext.disabled = current === TOTAL;
    document.title = '芃麦计划 · ' + current + '/' + TOTAL;
    preload(current - 1);
    preload(current + 1);
    preload(current + 2);
  }

  function goTo(target, direction) {
    target = Math.max(1, Math.min(TOTAL, Number(target)));
    if (target === current || animating) return;
    animating = true;
    direction = direction || (target > current ? 'next' : 'prev');
    page.classList.remove('turn-next', 'turn-prev');
    void page.offsetWidth;
    page.classList.add(direction === 'next' ? 'turn-next' : 'turn-prev');

    window.setTimeout(function () {
      current = target;
      pageImage.src = pathFor(current);
      syncUi();
    }, 205);

    window.setTimeout(function () {
      page.classList.remove('turn-next', 'turn-prev');
      animating = false;
    }, 440);
  }

  function next() { goTo(current + 1, 'next'); }
  function previous() { goTo(current - 1, 'prev'); }

  prevButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);
  tapPrev.addEventListener('click', function () { if (!hasMoved) previous(); });
  tapNext.addEventListener('click', function () { if (!hasMoved) next(); });
  pageSlider.addEventListener('input', function () {
    goTo(Number(pageSlider.value));
  });

  bookArea.addEventListener('touchstart', function (event) {
    if (!event.touches || !event.touches[0]) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    hasMoved = false;
  }, { passive: true });

  bookArea.addEventListener('touchmove', function (event) {
    if (!event.touches || !event.touches[0]) return;
    var dx = event.touches[0].clientX - touchStartX;
    var dy = event.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > 12 || Math.abs(dy) > 12) hasMoved = true;
  }, { passive: true });

  bookArea.addEventListener('touchend', function (event) {
    if (!event.changedTouches || !event.changedTouches[0]) return;
    var dx = event.changedTouches[0].clientX - touchStartX;
    var dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) next(); else previous();
    }
    window.setTimeout(function () { hasMoved = false; }, 80);
  }, { passive: true });

  document.addEventListener('keydown', function (event) {
    if (!zoomModal.hidden || !helpModal.hidden) {
      if (event.key === 'Escape') closeModals();
      return;
    }
    if (event.key === 'ArrowLeft') previous();
    if (event.key === 'ArrowRight' || event.key === ' ') next();
  });

  function openZoom() {
    zoomImage.src = pathFor(current);
    zoomImage.alt = '第 ' + current + ' 页放大图';
    zoomModal.hidden = false;
    zoomScroller.scrollTop = 0;
    zoomScroller.scrollLeft = Math.max(0, (zoomScroller.scrollWidth - zoomScroller.clientWidth) / 2);
    document.getElementById('zoomClose').focus();
  }

  function closeModals() {
    zoomModal.hidden = true;
    helpModal.hidden = true;
  }

  document.getElementById('zoomButton').addEventListener('click', openZoom);
  document.getElementById('zoomClose').addEventListener('click', closeModals);
  document.getElementById('helpButton').addEventListener('click', function () {
    helpModal.hidden = false;
    document.getElementById('helpClose').focus();
  });
  document.getElementById('helpClose').addEventListener('click', closeModals);
  document.getElementById('startReading').addEventListener('click', closeModals);

  zoomModal.addEventListener('click', function (event) {
    if (event.target === zoomModal) closeModals();
  });
  helpModal.addEventListener('click', function (event) {
    if (event.target === helpModal) closeModals();
  });

  syncUi();
  window.setTimeout(function () {
    for (var i = 1; i <= TOTAL; i += 1) preload(i);
  }, 1200);
}());
