var fs = require('fs');
// const path = require('path');


//*디렉토리 내 파일리스트 출력 변수에 저장
const dirPath = __dirname //directory path
var fileType = '.'+'pbf'; //file extension
var files = [];

var root = process.argv[2];  //윈도우 CMD 창에서 node를 실행할 때 "%cd%"로 폴더명을 넘기거나 '%1'으로 인수를 통해,
//파일명을 넘기게 되는 경우 node에서는 이와 같이 process.argv[2];를 통해 받게 됨.

root = root.replace(/\\/g, '/');  //위에서 받은 현재 폴더 명은 c:\\download\\ 와 같은 식으로 되어 있음.
//따라서 c:/download/ 와 같은 식으로 바꾸어 root라는 변수로 최종 전달.

const list = require('list-contents');  //1. 하위 폴더까지 포함한 모든 파일의 리스트를 검색하는 모듈
var path = root;
var filelist = [];
var filelistresult = [];
list(path,(o)=>{
  if(o.error) throw o.error;
  for(var i=0; i<o.files.length; i++) {  //1.2 list-contents 모듈은 o.files에 모든 파일 경로를 배열변수로 반환
    filelist[i] = path + '\\' + o.files[i];
  };
  var k = 0;
  for (k = 0; k<filelist.length; k++) {
    if(filelist[k].substr(filelist[k].length - 4) != '.pbf'){ //1.1 list-contents 모듈에서 특정한 확장자만 조회
    }
    else {
      filelistresult.push(filelist[k]);      //filelistresult라는 배열변수를 만들어 push를 통해 모든 파일경로를
    }                                        //배열변수에 넣음.
  }
  files = filelistresult;  //files 및 filelistresult는 하위 디렉토리를 전부 포함한 pbf파일의 경로 리스트
  // console.log(files);
    //각 파일리스트 for문으로 순회하며 콘텐츠 변경한 뒤 regex로 변수 따서 html 만들기
    for(let i=0; i<files.length; i++) {                   //2. for loop을 통해 모든 팟플 책갈피파일의 내용을 읽은 뒤 
      fs.readFile(files[i], 'utf16le', (err, data) => {   //썸네일 정보를 담은 부분을 지운 뒤 파일을 파일을 다시씀.
        if (err) throw err;
        var text = data;
        var reg = /(\*.*\*).{1000,}\s/g;        //regex를 통해 파일내용을 바꾸는데 필요한 규칙.
        var changeto = '$1';
        var findtest = reg.test(text)
        // console.log(findtest);             //reg.test는 현재 파일이 regex 표현에 맞는지 여부를 반환
        if (findtest == true) {                  //regex 표현에 맞지 않으면 while문을 바로 중지.
          var resulttext = (text.replace(reg, changeto));
          text = resulttext;
          fs.writeFile(files[i], text, (err) => {     //현재 파일 files[i]의 내용을 변환된내용인 text로 대체하여 다시씀
            if (err) throw err;
          });  
        };

        

        // console.log(text);
        
        k++;
      });

    };     
    //pbf 파일에서 썸네일 제거하고 깔끔하게 정리
});
