function Game(){
     let random = Math.random();
  let given_no = prompt("enter the no");
  let j=0;
  while(given_no!=random){
  if(given_no>random){alert("Given no is larger");}
    else if(given_no<random){
    alert("Given no is smaller");
    }
    else{
    alert("you guess the correct no in " ,j, "chance" );
    }
    j++;
  }
}
