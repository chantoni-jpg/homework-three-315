function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");
  MODEL.getPages(pageID);

  if (pageID == "") {
    navToPage("home");
  } else {
    navToPage(pageID);
  }
}

function navToPage(pageName) {
  $.get(`pages/${pageName}/${pageName}.html`, function (data) {
    console.log(data);
    $("#app").html(data);
  });
}
function initListen() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListen();
  navToPage("");
});
