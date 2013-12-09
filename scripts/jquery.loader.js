(function($){
  $.jLoader = {
    defaults: {
      imgDir: "images/",
      imgContainer: "",
      imgTotal: 2,
      imgFormat: ".jpg",
      simpleFileNames: true
    }
  };

  //helper: create img el, append to el identified as
  //imgContainer in the config object passed to fn
  function simpleLoad(config){
    for (var i = 1; i < config.imgTotal + 1; i++){
      $('<img>').attr({
        id: "image" + i,
        src: config.imgDir + i + config.imgFormat,
        title: "Image" + i
      }).appendTo("#" + config.imgContainer);
    }
  }

  //helper: takes config obj, fileNames array
  function complexLoad(config, fileNames){
    for (var i = 0; i < fileNames.length; i++){
      $('<img>').attr({
        id: fileNames[i],
        src: config.imgDir + fileNames[i] + config.imgFormat,
        title: fileNames[i]
      }).appendTo("#" + config.imgContainer);
    }
  }

  //the plugin, 2 optional arguments
  $.fn.jLoader = function (configOptional, fileNames){
    var config = $.extend({}, $.jLoader.defaults, configOptional);
    config.imgContainer = this.attr("id");
    (config.simpleFileNames === true) ? simpleLoad(config) : complexLoad (config, fileNames);
    return this;
  };

})(jQuery);