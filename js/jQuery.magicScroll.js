;
(function($) {

  $.fn.magicScroll = function(options) {

    var config = $.extend({
      windowarea: "50%",
      position: "-50%",
      container: window,
      mainClass: "magictime",
      magicClasses: ['pulse', 'bounceInDown', 'bounceInUp', 'spaceInUp', 'spaceInRight', 'spaceInLeft', 'spaceInDown', 'swap', 'vanishIn', 'perspectiveDownRetourn', 'perspectiveUpRetourn', 'perspectiveLeftRetourn', 'perspectiveRightRetourn', 'slideUpRetourn', 'slideDownRetourn', 'slideLeftRetourn', 'slideRightRetourn'],
      getRand: function(arr) {
        var max = arr.length - 1,
          rand = Math.floor(Math.random() * (max + 1));
        return arr[rand];
      },
      oneTime: false,
      textillate: {}
    }, options);

    return this.each(function() {

      var scrollPosition;
      var box = $(this);
      var scrollarea = null;
      var animate_type;
      var original_pos = null;
      var magicClass = config.getRand(config.magicClasses);
      original_pos = getPosition(original_pos, config.container, box);
      scrollarea = verify_windowarea(config.windowarea, config.container);

      box.fadeOut(0);
      
      $(config.container).scroll(function(e) {

        scrollPosition = $(config.container).scrollTop() + scrollarea;

        if (scrollPosition > original_pos) {
          animation(box, config, magicClass);

        } else {
          if (!config.oneTime) {
            _animation(box, config, magicClass);
          }
        }
      });

    });

  }

  function _animation(box, config, magicClass) {

    box.removeClass(config.mainClass + ' ' + box.data('magicClass')).removeData('magicClass').fadeOut(333);

  }

  function animation(box, config, magicClass) {
    if (config.textillate) {
      box.parent().find(config.textillate.selector).textillate({ in: {
          effect: config.getRand(config.textillate.inEffects)
        },
        out: {
          effect: 'def',
          delayScale: 0,
          delay: 0,
          callback: function() {

          }
        }
      });
    }
    box.fadeIn(1000).addClass(config.mainClass + ' ' + magicClass).data('magicClass', magicClass);;

  }

  function verify_dir(element, dir, pos, animate_type) {

    if (pos.match(/^[\+\-]?[0-9]{1,3}%{1}$/)) {
      var number = pos.replace('%', '');

      if (number >= -100 && number <= 100) {} else {
        pos = "-50%";
      }

    } else {
      pos = "-50%";
    };

    return animate_type;

  }

  function verify_windowarea(windowarea, container) {

    if (windowarea.match(/^[\+\-]?[0-9]{1,3}%{1}$/)) {
      windowarea = windowarea.replace('%', '');
      if (windowarea >= -100 && windowarea <= 100) {
        scrollarea = (windowarea * $(container).height()) / 100;
      } else {
        scrollarea = $(container).height();
      }
    } else {
      scrollarea = $(container).height();
    };

    return scrollarea;

  }

  function getPosition(original_pos, container, element) {
    var container_pos = null;

    if (container == window) {
      container_pos = 0;
    } else {
      container_pos = element.parent().offset().top;
    }

    original_pos = element.offset().top - container_pos;

    return original_pos;
  }

  $(window).resize(function() {
    original_pos = getPosition(original_pos, config.container, box);
  });

})(jQuery);