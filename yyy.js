function fscpe (lv, callback) {
    // var lv = '려ㅊ';
    
    callback();
    console.log(lv);
}

var callb = function(){
 console.log('현재 콜백함수 실행중');
};
fscpe('바보', callb);

var fs = require('fs');

var test = function(){
    var text = 'asdfasdf';
    var fff = function(){
        fs.readFile('c:/download/fff.txt', 'utf8', (err, data) => {
        if (err) throw err;
        text = data;
        // console.log(text);
        return text;
        
        })
        return text;
    };
    
};

test();

console.log(test());
