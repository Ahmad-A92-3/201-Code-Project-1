'use strict'
let score=0;
let userName=prompt("what\'s your name")
 

alert("Welcome to my site, "+userName+'\n' +"I want to ask you five questions about me. Please answer these questions with yes or no.without space after that")
let age = prompt("my age 22 ?").toLowerCase()

if (age=='yes'||age=='y') {
    alert("your answer is correct  = " + age.toLowerCase()+" my age =22")


    console.log("your answer is correct  = " + age.toLowerCase()+" my age =22");
    score++


} 
 else if (age == 'no' || age == 'n') {
    alert("your answer is wrong   = " + age.toLowerCase()+" my age=22" )

    console.log("your answer is wrong   = " + age.toLowerCase()+" my age=22" );

} 
else{
    alert("answer with yes/y or no/n")
}
let favoriteDish = prompt("my favorite dish is mansaf ?").toLowerCase();

 if (favoriteDish == 'yes' || favoriteDish == 'y') {

    alert("your answer is wrong   " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ")

    console.log("your answer is wrong   " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ");

}


 else if (favoriteDish== 'no' || favoriteDish == 'n') {
  alert("your answer is correct  = " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ")

    console.log("your answer is correct  = " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ");
    score++


}
else{
    alert("answer with yes/y or no/n")
}
  let color = prompt("my favorite color is red  ?").toLowerCase();
if (color == 'no' || color == 'n') {
    alert("your answer is correct  = " + color.toLowerCase()+" my favorite color is black ")

    console.log("your answer is correct  = " + color.toLowerCase()+" my favorite color is black ");
    score++

}
else  if (color == 'yes' || color == 'y'){
    alert("your answer is wrong   " + color.toLowerCase()+ "  my favorite color is black ")
    console.log("your answer is wrong   " + color.toLowerCase()+ "  my favorite color is black ");

}
else{
    alert("answer with yes/y or no/n")
}
let allergic = prompt("Do I have a spring allergy?").toLowerCase();

 if (allergic == 'yes' || allergic == 'y') {
    alert("your answer is correct  = " + allergic.toLowerCase()+" i have allergic ")

    console.log("your answer is correct  = " + allergic.toLowerCase()+" i have allergic ");
    score++

}

 else if(allergic == 'no'  || allergic == 'n'){

    alert("your answer is wrong   = " + allergic.toLowerCase()+" i have allergic ")
    console.log("your answer is wrong   = " + allergic.toLowerCase()+" i have allergic ");}

    else{
        alert("answer with yes/y or no/n")
    }
 let home = prompt("Do I like staying home?").toLowerCase();


 if(home=='yes' ||home=='y'){
    alert("your answer is correct  = " + home.toLowerCase()+"I like to stay at home ")

    console.log("your answer is correct  = " + home.toLowerCase()+"I like to stay at home ");
    score++



    
} 
else if(home=='no'||home=='n'){
    alert("your answer is wrong  = " + home.toLowerCase()+" I like to stay at home")

    console.log("your answer is wrong  = " + home.toLowerCase()+" I like to stay at home");

}
else{
    alert("answer with yes/y or no/n")
}
alert("Thank you for trying "+'\n'+"Your score is "+score+ "/ 5")




