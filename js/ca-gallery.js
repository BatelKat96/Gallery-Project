(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


$(document).ready(initPage)

function initPage() {
  console.log('start:')
  addEventListeners()
  renderPortfolio()

}


function renderPortfolio() {
  const protfolios = getProtfolios()
  const strHTMLs = protfolios.map(protfolio => `
<div class="col-md-4 col-sm-6 portfolio-item" data-portfolio-id="${protfolio.id}">
<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
  <div class="portfolio-hover">
    <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
    </div>
  </div>
  <img class="img-fluid" src="img/portfolio/${protfolio.id}.jpg" alt="">
</a>
<div class="portfolio-caption">
  <h4>${protfolio.name}</h4>
  <p class="text-muted">${protfolio.title}</p>
</div>
`)
  $('.portfolio-container').html(strHTMLs)
  addProtfolioEventListeners()
}


function onRenderModal(protfolioId) {
  var protfolio = getProfolioById(protfolioId)
  var date = publishDate(protfolio.publishedAt)

  var strHTMLs = `
  <h2>${protfolio.name}</h2> 
  <p class="item-intro text-muted">${protfolio.title}.</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${protfolio.id}.jpg" alt="">
  <p>${protfolio.desc}</p>
  <ul class="list-inline">
    <li>Date: ${date} </li>
  </ul>
  <button  class="btn btn-primary btn-url" data-portfolio-id="${protfolio.id}" type="button">Check out the project!</button>
  <br\>
  <br\>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
`
  $('.modal-body').html(strHTMLs)
  addProtfolioEventListeners()
}

function addProtfolioEventListeners() {
  $('.portfolio-link').on('click', function () {
    var portfolioId = $(this).closest('.portfolio-item').data('portfolioId')
    console.log('protfolioId:', portfolioId)
    onRenderModal(portfolioId)
  })

  $('.btn-url').on('click', function () {
    var portfolioId = $(this).data('portfolioId')
    var protfolio = getProfolioById(portfolioId)
    window.open(protfolio.url, "_blank")
  })
}


function addEventListeners() {
  $('.btn-email').on('click', function (e) {
    e.preventDefault()
    // var email = $('#email').val()

    var subject = $('#subject').val()
    var textMsg = $('#textMsg').val()

    sendMsg(subject, textMsg)

    $('#email').val('')
    $('#subject').val('')
    $('#textMsg').val('')
  })
}

function sendMsg(subject, textMsg) {
  var emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=batelkat@gmail.com&su=${subject}&body=${textMsg}`
  window.open(emailLink, "_blank")
}
