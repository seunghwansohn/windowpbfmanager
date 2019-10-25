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
  }
  var k = 0;
  for (k = 0; k<filelist.length; k++) {
    if(filelist[k].substr(filelist[k].length - 4) != '.pbf'){
    }
    else {
      filelistresult.push(filelist[k]);
    }
  }
    files = filelistresult.sort();  //files 및 filelistresult는 하위 디렉토리를 전부 포함한 pbf파일의 경로 리스트
    fileslength=files.length;
  // console.log(files);
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
      template = '<br>----------------------------------------------<br>' + template + '<a href="file:///' + files[n] + '">' + files[n] + '</a><br><br>';
      for (k=0; k<textlists.length; k++) {
        template = template + textlists[k] + '<br>';
      }
      return template;
    };
    
    var excute = function(func, fileslength){
        var html = `<html>
<head>
<meta charset="utf-8">
</head>
<body>
`;
      for (n=0; n<fileslength; n++){
        html = html + func(n);
       
      // }
      };
      html = html + `
</body>`
      fs.writeFile('책갈피리스트.html', html, (err) => {
      
        if (err) throw err;
    });
    }

    excute(secondtemplate, fileslength);

  //   const promise = new Promise((resolve,reject) => {
  //     if (true) {
  //       var filecontents = [];
  //       var template = '';
  //       // var textlists = [];
  //       var currentfilename = '';
  //       filecontents = fs.readFileSync(files[2], 'utf8');
  //       var originaltext = filecontents;
  //         resolve(originaltext);
  //     } else {
  //         reject('실패');
  //     }
  // });
  
  //     promise
  //         .then((originaltext) => {
  //             var textlists = [];
  //             var template1 = '';
  //             var reg = /\*.*\*/g;
  //               while((textresult = reg.exec(originaltext)) != null ) {
  //                   textlists.push(textresult[0]); //store the file name into the array files
  //               };
  //               for(let l=0; l<textlists.length; l++) {
  //                 template1 = template1 + textlists[l] + '\n';
  //               }
  //             // console.log(template1);
  //             return new Promise((resolve, reject) => {
  //                 resolve(template1);
  //             });
  //         })
      
  //         .then((template1) => {
  //             console.log(template1);
  //             return new Promise((resolve, reject) => {
  //                 resolve('멍청이');
  //             });
  //         })
    
});
