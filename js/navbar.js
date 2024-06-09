$(document).ready(function () {
  // 모든 링크 선택
  var $links = $(".navbar_item a");
  var currentPath = window.location.pathname; // 현재 페이지의 경로

  $links.each(function () {
    if (currentPath.endsWith($(this).attr("href"))) {
      // 현재 경로가 링크 경로로 끝나는지 확인
      $(this).parent().addClass("active-item"); // 링크의 부모 요소에 클래스 추가
    }
  });

  var $openButton = $("#openButton");
  var $closeButton = $("#closeButton");
  var $navbar = $(".navbar_parent");

  $openButton.on("click", function () {
    $navbar.css("left", "0px");
  });

  $closeButton.on("click", function () {
    $navbar.css("left", "-201px");
  });
});
