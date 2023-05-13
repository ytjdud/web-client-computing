
async function init() {
  const response = await fetch('http://localhost:8090/https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=상영영화', {
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});
const body = response.text().then(function(html){
  var html_dom = new DOMParser().parseFromString(html,'text/html');
  console.log(html_dom.body);
  var movies = html_dom.querySelectorAll(".data_area");
  console.log(movies);
  display(movies);
});
}

function display(movies) {
  const result = document.querySelector('#result');
  let string = '';
  movies.forEach((movie) => {
    // 인자값 변경하기
    var title = movie.querySelector(".area_text_box a").innerText;
    var genre = movie.querySelector(".info_group dd:nth-child(2)").innerText;
    var runtime = movie.querySelector(".info_group dd:nth-child(3)").innerText;
    var date = movie.querySelector(".info_group:nth-child(2) dd:nth-child(2)").innerText;
    var rate = movie.querySelector(".num").innerText;
    var a = movie.querySelector("span._text");
    if (a) {
      var actors = a.innerText;
    } else {
      var actors = " ";
    }
    // var local = movie.querySelector(".data_area > img").src;
    // var poster = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=상영영화" + local.substr(local.indexOf("/data"));
    string += `<table><tr><th>영화</th><td>${title}</td></tr>
                <tr><th>장르</th><td>${genre}</td></tr>
                <tr><th>상영시간</th><td>${runtime}</td></tr>
                <tr><th>개봉일</th><td>${date}</td></tr>
                <tr><th>평점</th><td>${rate}</td></tr>
                <tr><th>출연</th><td>${actors}</td></tr>`;
                // <tr><th>포스터</th><td><img width="178" height="260" src="${poster}"></td></tr></table>`;
                // 인자값 변경하기
  });            
  result.innerHTML = string;
}

init();
