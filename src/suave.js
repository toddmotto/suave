window.suave = (function (window, document, undefined) {

  'use strict';

  /*
   * Constructor function
   */
  var Suave = function (elem) {
    this.elem = elem;
  };

  /*
   * Prototypal setup
   */
  Suave.prototype = {

    init : function () {

      var dataAttr = this.elem.getAttribute('data-src');
      var videoSource = dataAttr.match(/^([^]+)\{/)[1];
      var fileExts = dataAttr.match(/\{([^]+)\}$/)[1].toString().replace(/\s/g, '').split(',');
      
      for (var i = 0; i < fileExts.length; i++) {
        var extension = fileExts[i];
        var source = document.createElement('source');
        source.src = videoSource + extension;
        source.type = 'video/' + extension;
        this.elem.appendChild(source);
      }

    }

  };

  /*
   * Initiate the plugin
   */
  [].forEach.call(document.querySelectorAll('video[data-src]'), function (suave) {
    new Suave(suave).init();
  });

})(window, document);