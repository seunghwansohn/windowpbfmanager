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

    //각 파일리스트 for문으로 순회하며 콘텐츠 변경한 뒤 regex로 변수 따서 html 만들기
    var template1 = files[0] + '\n\n';
    var firsttemplate = function () {
      fs.readFile(files[0], 'utf8', (err, data) => {
        // console.log('0번파일 처리중');
        if (err) throw err;
        var originaltext = data
        var textlists = [];
        var reg = /\*\D*\*/g;
        while((textresult = reg.exec(originaltext)) != null ) {
            textlists.push(textresult[0]); //store the file name into the array files
        };
        for(let l=0; l<textlists.length; l++) {
            template1 = template1 + textlists[l] + '\n';
        }
      });
    };

    var secondtemplate = function(n) {
      var filecontents = [];
      var template = '';
      var textlists = [];
      var currentfilename = '';
      filecontents = fs.readFileSync(files[n], 'utf8');
      var originaltext = filecontents;
      var reg = /\*.*\*/g;
      while((textresult = reg.exec(originaltext)) != null ) {
          textlists.push(textresult[0]); //store the file name into the array files
      };
      template = template + files[n] + '\n\n';
      for (k=0; k<textlists.length; k++) {
        template = template + textlists[k] + '\n';
      }
      console.log(template);
    };
    
    // var excutef = function(n, callback) {
    //   for (var n=1; n<filelist.length; n++){
    //     callbback(n);
    //   }
    // }

    // excutef(n, secondtemplate1());

    secondtemplate(4);

    var secondtemplate2 = function() {  
      var currentfilename = files[n];

          template = template + files[n] + '\n\n';

          for(let k=0; k<textlists.length; k++) {
              template = template + textlists[k] + '\n';
          }
          template = template + '\n\n\n'
          console.log(template);
    };
});
