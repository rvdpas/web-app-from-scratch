"use strict";

(function() {
    // comment what's going on
    var app = {
        init: function() {
            routes.init();
            console.log(location.hash);
            console.log(Date()) // How is this relevant?
        }
    };
    // comment what's going on
    var routes = {
        init: function() {
            // var oldLocation = location.hash; // Why is this still here?
            window.addEventListener('hashchange', function(){
                sections.toggle(location.hash);
            })
        }
    };
    // Comment what's going on
    var sections = {
        toggle: function(route) {
            var mySection = document.querySelectorAll('section');
            mySection.forEach( function(e) {
                if('#' + e.id === route) {
                    e.classList.remove('section__hide');
                } else {
                    e.classList.add('section__hide');
                }
            });
        }
    };

    app.init();

    }()
);
