var age = parseInt(prompt("Please enter your age"));

if(age < 125 && age >0){
    console.log("A real age");
}else if(age> 125 || age <0){
    console.log("Not a real age");
}
