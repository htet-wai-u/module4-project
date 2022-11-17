var names=["John","johnson","anna","Michele"];
for(i=0;i<names.length;i++){

    var letter= names[i].charAt(0);

    if(letter==="j" || letter==="J"){
        console.log("Hello"+" "+ names[i]);
    }

    else{
        console.log("Goodbye"+" "+ names[i]);
    }
    
}
