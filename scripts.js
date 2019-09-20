function greeter(question = "What's your name?"){
  return prompt(question);
}

const answer = greeter("What's your favorite scary movie?");
console.log(answer);


document.querySelector('h1').textContent = greeter();
//const h1 = document.querySelector("h1");
//const textContent = h1.textContent

answer = prompt(question);

if (answer === ""){
greeter(); //recursion


}
return answer;

