var files = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var textlists = [1,2,3,4];
for(let n=1; n<files.length; n++) {
        console.log(n +'번파일인 ' + files[n] + '처리중 \n\n');
    
        for(var k=0; k<textlists.length; ) {
            console.log('그중에 ' + k + '하는중');
            k++;
        };
       
};