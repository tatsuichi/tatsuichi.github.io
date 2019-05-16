
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://rti-giken.jp/fhc/api/train_tetsudo/delay.json`, true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {	// 操作が完了した
      if(xhr.status === 200) {	// OK
        
        var json = xhr.response;
        for (var i=0; i<json.length; i++) {
          if(json[i].company === "JR東日本"){
            if(json[i].name === "宇都宮線" || json[i].name === "高崎線"){
              alert("json[i].name");
            }
            if(json[i].name === "京浜東北線"){
              alert("json[i].name");
            }
            if(json[i].name === "湘南新宿ライン" || json[i].name == "東海道線"){
              alert("json[i].name");
            }
          }
        }
        
      }
    }
  };
  xhr.send();
  
  
