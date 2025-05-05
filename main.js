const allWord=[
    "transfer","job responsibility","successor","invaluable","appreciate","even though","industry","in particular","gain","assistant","strive to","treatment","sincerely","capable","commend","achievement","congratulate","colleague","recommend","inevitable","worthless"

];
document.getElementById("pressBtn").addEventListener("click",function(){
    const todayArray=[];
    
    for(i=1;i<=8;i++){
        const pickIndex = Math.floor(Math.random() * allWord.length);
        const printWord=allWord[pickIndex];
        
        todayArray.push(printWord);
        allWord.splice(pickIndex, 1);
   
        };
document.getElementById("perWord").innerText=todayArray.join("\n");

});




