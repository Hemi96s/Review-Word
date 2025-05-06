const allWord=[
    "transfer","job responsibility","successor","invaluable","appreciate","even though","industry","in particular","gain","assistant","strive to","treatment","sincerely","capable","commend","achievement","congratulate","colleague","recommend","inevitable","worthless",
    "apology","extension","immediately","along with","draft","estimate","agreeable","settle on","contract","verify",
    "a couple of","additional","pleased","sales representative","based in","frontline","communication","arrange","projector","rent","equipment","bind","rest of","human resources","technician","executive","personnel","in progress","take place",
    "studio","longest-running business","portfolio","high-profile","reputation","eagerly","anticipate","comprehensive","unbeatable","publicize","established","renewal","accept","dozen","reservation","reasonable price","interruption",
    "conference","as though","be used to +Ving/N","assume","medical","beforehand","afterward","scientific","feasibility","healer","tribal","novel","diagnosis","parasite","resistance","closing address","treatment","pre-registration","except for","lecture","be accustomed to + Ving/N","favor",
    "banquet","annual","venue","undergo","renovation","occasion","volunteer"," get a hold of","decorate","appetite","solicit",
    "community","pick-up","quantity","electronic","hazardous","dispose of","hesitate","upholstery","avenue","regulation","copper","aluminum","specialist","promotion","competitor"

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




