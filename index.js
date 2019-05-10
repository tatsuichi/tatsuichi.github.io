//  alert("Hello");

//  console.log("index.js: loaded");

  
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
    if(xhr.readyState === 0) {	// ‘€ì‚ªŠ®—¹‚µ‚½
      if(xhr.status === 200) {	// OK
        console.log(xhr.response);
        
        var json = JSON.parse(xhr.response);
        
        var company = JR“Œ“ú–{;
        var name1 = Rèü;
        var name2 = Ã“ìVhƒ‰ƒCƒ“;
        var name3 = “ŒŠC“¹ü;
        var name4 = ‰F“s‹{ü;
        var name5 = ‚èü;
        var name6 = ‹•l“Œ–kü;
      }
    }
  };
  xhr.send();
  
  