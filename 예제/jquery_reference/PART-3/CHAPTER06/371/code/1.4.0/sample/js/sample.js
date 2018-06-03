$(document).bind("mobileinit", function(){
  $.mobile.toolbar.prototype.options.addBackBtn = true;
  $.mobile.toolbar.prototype.options.backBtnText = "되돌아감";
  $.extend($.mobile, {
    loadingMessage : "읽고 있는 중...",
    pageLoadErrorMessage : "읽고 있는 중 에러가 발생했다",
    ajaxEnabled : false,
    defaultDialogTransition : "slidedown"
  });
})