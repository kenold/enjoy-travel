// Add overflow: hidden to the body tag when toggle is expanded
(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
      body: document.querySelector('body'),

      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
        this.body.classList.toggle('fixedPosition');
      }
    };

    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

  }());