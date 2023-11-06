const express = require("express");
const app = express();
console.log(app); //* 중단점을 찍고 내용을 확인해보기
// express()라는 이름의 변수 app을 조회한 모습
// 함수처럼 보이지만 인스턴스이다.
// 객체이므로 여러 가지 메서드와 속성들이 가득 들어있는 것을 확인


//! 터미널 출력 vs 디버거 사용
// 터미널에 출력하는 방식은 console.log()를 이용해 일일이 작성해야 하는데, 다양한 객체를 조회하는 데에는 제한적이다.
// 하지만, 디버거는 어디에 무엇이 있는지 토글 형태로 출력되어 시각적으로 확인하기 편리하다.
// 따라서 브라우저가 따로 없는 서버 구축 단계에서는 디버거 사용을 습관화하는 것이 매우 중요하다.

// 디버거를 사용하면 제작 난도와 작업하는 데에 소요되는 시간이 대폭 줄어드는 효과를 경험할 수 있다.
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});