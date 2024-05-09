var pieData = {
  labels: ["98", "65", "41", "25", "13"],
  series: [98, 65, 41, 25, 13],
};

var pieOptions = {
  width: "100%",
  height: "440px",
};

new Chartist.Pie(".pie-chart", pieData, pieOptions);



/*
BAR CHART
================================================ */
var barData = {
  labels: ["Manhattan", "Queens", "Brooklyn", "Bronx","Staten Island","No value" ],
  series: [[98, 65, 41,25,13,]],
};

var barOptions = {
  axisY: {
    offset: 40,
    scaleMinSpace: 80,
    labelInterpolationFnc: function (value) {
      return value + "";
    },
  
  },
  width: "120%",
  height: "400px",
};

new Chartist.Bar(".bar-chart", barData, barOptions);


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