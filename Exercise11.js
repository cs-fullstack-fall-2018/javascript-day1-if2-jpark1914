var grade = parseInt(prompt("Please enter your grade"));

if(grade <=100 && grade >= 90 ){
    console.log("You got A")
}else if(grade <90  && grade >= 80){
    console.log("You got a B");
}else if(grade < 80 && grade >= 70){
    console.log("You got a C");
}else if(grade < 70 && grade >= 60){
    console.log("You got a D");
}else if(grade <60){
    console.log("BOI");
}else{
    console.log("ERROR");
}