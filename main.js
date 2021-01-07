var inputs=[];
function GetParagraph1(){
for( var k=1; k<=6; k++){
inputs.push(document.getElementById("nameoftext"+k).value);
}
inputs.join(". ");
document.getElementById("ShowParagraph1").innerHTML=inputs.join(". ");
var input2=[];
function GetParagraph2(){
    for( var i=1; i<=6; i++){
    input2.push(document.getElementById("text"+i).value);
    }
    input2.join(". ");
    document.getElementById("ShowParagraphw").innerHTML=input2.join(". ");