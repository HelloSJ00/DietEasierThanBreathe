$(document).ready(function () {
  // 운동별 유튜브 링크 설정
  var youtubeLinks = {
    squat: "https://www.youtube.com/results?search_query=스쿼트",
    deadlift: "https://www.youtube.com/results?search_query=데드리프트",
    benchPress: "https://www.youtube.com/results?search_query=벤치프레스",
    pullup: "https://www.youtube.com/results?search_query=풀업",
    jogging: "https://www.youtube.com/results?search_query=조깅",
    cycling: "https://www.youtube.com/results?search_query=사이클링",
    swimming: "https://www.youtube.com/results?search_query=수영",
    aerobic: "https://www.youtube.com/results?search_query=에어로빅",
  };

  // 운동 태그 클릭 이벤트 설정
  $(".Exercise").click(function () {
    var exerciseId = $(this).attr("id");
    if (youtubeLinks[exerciseId]) {
      window.open(youtubeLinks[exerciseId], "_blank");
    }
  });
});
