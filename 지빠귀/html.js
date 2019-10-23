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

fs.writeFile('힣.pbf', '', (err) => {
    // fs.writeFile(files[i].replace('.pbf', '.txt'), text, (err) => {

    if (err) throw err;
});

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
  files = filelistresult;  //files 및 filelistresult는 하위 디렉토리를 전부 포함한 pbf파일의 경로 리스트

//   console.log(files);

    //각 파일리스트 for문으로 순회하며 콘텐츠 변경한 뒤 regex로 변수 따서 html 만들기
    var template = files[0] + '\n\n';
    fs.readFile(files[0], 'utf8', (err, data) => {
        console.log('0번파일 처리중');
        if (err) throw err;

        var originaltext = data
        var textlists = [];
        var reg = /\*\D*\*/g;
        while((textresult = reg.exec(originaltext)) != null ) {
            textlists.push(textresult[0]); //store the file name into the array files
        };
        for(let l=0; l<textlists.length; l++) {
            template = template + textlists[l] + '\n';
        }
        console.log(template);
        console.log('0번파일 처리 끝\n\n');
        console.log('파일숫자는 ' + files.length + '\n\n');
    });

    for(let n=1; n<files.length; n++) {
        fs.readFile(files[n], 'utf8', (err, data) => {
            if (err) throw err;
            console.log(n +'번파일인 ' + files[n] + '처리중 \n\n');
            var originaltext = data;
            var textlists = [];
            var reg = /\*\D*\*/g;
            textresult = reg.exec(originaltext)
            
            if(textresult != null ) {
                textlists.push(textresult[0]); //store the file name into the array files
            };

            // console.log(n + '번파일의 내용은' + textlists[0] + '입니다');

            template = template + files[n] + '\n\n';

            for(let k=0; k<textlists.length; k++) {
                template = template + textlists[k] + '\n';
            }
            template = template + '\n\n\n'
            // console.log(template);

           
        });
    }
});
