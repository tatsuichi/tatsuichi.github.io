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
    if(xhr.readyState === 0) {	// ���삪��������
      if(xhr.status === 200) {	// OK
        console.log(xhr.response);
        
        var json = JSON.parse(xhr.response);
        
        var company = JR�����{;
        var name1 = �R���;
        var name2 = �Ó�V�h���C��;
        var name3 = ���C����;
        var name4 = �F�s�{��;
        var name5 = �����;
        var name6 = ���l���k��;
      }
    }
  };
  xhr.send();
  
  