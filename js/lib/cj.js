(function (root, factory) {
    console.log(11111111)
    if (typeof define === 'function' && define.amd) {
      // AMD. Make globaly available as well
      define(['moment', 'jquery'], function (moment, jquery) {
        if (!jquery.fn) jquery.fn = {}; // webpack server rendering
        return (root.daterangepicker = factory(moment, jquery));
      });
    } else if (typeof module === 'object' && module.exports) {
      // Node / Browserify
      //isomorphic issue
      var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
      if (!jQuery) {
        jQuery = require('jquery');
        if (!jQuery.fn) jQuery.fn = {};
      }
      var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
      module.exports = factory(moment, jQuery);
    } else {
        console.log(333333333333)
      // Browser globals
      factory(root.moment, root.jQuery);
    }
  }(this, function (moment, $) {
      console.log(22222222222)
      console.log('moment',moment)
      console.log('$',$)
    $.fn.daterangepicker = function (options, callback) {
      this.each(function () {
        var el = $(this);
        if (el.data('daterangepicker'))
          el.data('daterangepicker').remove();
        el.data('daterangepicker', new DateRangePicker(el, options, callback));
      });
      return this;
    };
    return DateRangePicker;
  
  }));