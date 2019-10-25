var fs = require('fs');
var yyy = function() {fs.readFile('c:/download/fff.txt', 'utf8', (err, data) => {
    // console.log('0번파일 처리중');
    if (err) throw err;
    console.log(data);
});
};

yyy();
