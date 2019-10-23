var fs = require('fs');
// const path = require('path');


//*디렉토리 내 파일리스트 출력 변수에 저장
const dirPath = __dirname //directory path
var fileType = '.'+'pbf'; //file extension
var files = [];

const list = require('list-contents');
var path = __dirname;
var filelist = [];
var filelistresult = [];
list("./",(o)=>{
  if(o.error) throw o.error;
  for(var i=0; i<o.files.length; i++) {
    filelist[i] = path + '\\' + o.files[i];
  };
  var k = 0;
  for (k = 0; k<filelist.length; k++) {
    if(filelist[k].substr(filelist[k].length - 4) != '.pbf'){
    }
    else {
      filelistresult.push(filelist[k]);
    }
  }
  files = filelistresult;  //files 및 filelistresult는 하위 디렉토리를 전부 포함한 pbf파일의 경로 리스트

    //각 파일리스트 for문으로 순회하며 콘텐츠 변경한 뒤 regex로 변수 따서 html 만들기
    for(let i=0; i<files.length; i++) {
      fs.readFile(files[i], 'utf8', (err, data) => {
        if (err) throw err;
        var text = data;
        var reg = /\*\S{1000,}\s/;
        var changeto = `\*`;
        var k = 1;
          while (k < 1000){
            var findtest = reg.test(text)
            if (findtest == false) {
              break;
              };
        var resulttext = (text.replace(reg, changeto));
          text = resulttext;
          k++;
          };
          fs.writeFile(files[i], text, (err) => {
            // fs.writeFile(files[i].replace('.pbf', '.txt'), text, (err) => {

            if (err) throw err;
          });
          console.log(text);
      });     
    }
    //pbf 파일에서 썸네일 제거하고 깔끔하게 정리
});
