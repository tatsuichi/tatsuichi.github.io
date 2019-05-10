  alert("Hello");

  console.log("index.js: loaded");

  
//  const xhr = new XMLHttpRequest();
//  xhr.open("GET", `https://www.yahoo.co.jp/`);
//  xhr.addEventListener("load", (event) => {
//      if (event.target.status !== 200) {
//          console.error(`${event.target.status}: ${event.target.statusText}`);
//          return;
//      }
//      console.log(event.target.status);
//      console.log(event.target.responseText);
//  });
//  xhr.addEventListener("error", () => {
//      console.error("Network Error");
//  });
//  xhr.send();
  
  
  
  
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://rti-giken.jp/fhc/api/train_tetsudo/delay.json`, true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 0) {	// 操作が完了した
      if(xhr.status === 200) {	// OK
        console.log(xhr.response);
        
        var json = JSON.parse(xhr.response);
        
        var company = JR東日本;
        var name1 = 山手線;
        var name2 = 湘南新宿ライン;
        var name3 = 東海道線;
        var name4 = 宇都宮線;
        var name5 = 高崎線;
        var name6 = 京浜東北線;
      }
    }
  };
  xhr.send();
  
  
