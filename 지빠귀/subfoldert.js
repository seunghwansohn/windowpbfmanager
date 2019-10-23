//하위 디렉토리 포함 모든 pbf파일의 리스트를 filelistresult라는 배열변수로 출력

const list = require('list-contents');
var path = __dirname;
var filelist = [];
var filelistresult = [];
list("./",(o)=>{
  if(o.error) throw o.error;
  for(var i=0; i<o.files.length; i++) {
    filelist[i] = path + '\\' + o.files[i];
  }
  var k = 0;
  for (k = 0; k<filelist.length; k++) {
    if(filelist[k].substr(filelist[k].length - 4) != '.pbf'){
    }
    else {
      filelistresult.push(filelist[k]);
    }
  }
  console.log(filelistresult);
});