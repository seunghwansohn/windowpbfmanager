//아래의 pbf파일 텍스트에서 *~* 사이의 텍스트만 추출하여 변수에 저장. 예를들어 배열 1번은 *패스파인더 설정*

var originaltext = `[Bookmark]
0=40741*패스파인더 설정*
1=121934*개체 합치기*
2=154399*개체 모양 빼기*
3=257739*겹친 부분만 남기기*
4=286288*겹친부분만 제외*
5=366475*Devide - 겹친부분 한꺼번에 다 자르기*
6=424013*Devide 예제*
7=486496*Trim - 맨앞 부분 위주로 한꺼번에 자르기*
8=560697*같은 색깔끼리 합치기*
9=

`
var textlists = [];
var reg = /\*\D*\*/g;
while((textresult = reg.exec(originaltext)) != null ) {
    textlists.push(textresult[0]); //store the file name into the array files
};
console.log(textlists);