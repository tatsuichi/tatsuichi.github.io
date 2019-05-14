  alert("Hello");
  
  const xhr = new XMLHttpRequest();
//  xhr.open("GET", `https://rti-giken.jp/fhc/api/train_tetsudo/delay.json`, true);
  xhr.open("GET", `https://www.yahoo.co.jp/`, true);
//  xhr.responseType = 'json';
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
      } else {
        console.log(xhr.status);
      }
    } else {
      console.log(xhr.readyState);
    }
  };
  xhr.send();
  
  
