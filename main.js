//https://data.cityofnewyork.us/resource/ymvu-4x4s.json
//e6oOp6xhi9xcRB3VMdCzyE1mx    
 


let url = "https://data.cityofnewyork.us/resource/ymvu-4x4s.json";

let headlines = document.getElementById("headlines");

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
      console.log(article["ZIP Code"]); // "ZIP Code" 키를 올바르게 사용합니다.

      let a = document.createElement("a");
      a.innerHTML = article["ZIP Code"]; // "ZIP Code" 값을 링크 텍스트로 설정합니다.

      headlines.appendChild(a);
    });
  });


  