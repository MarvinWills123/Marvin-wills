function greeter(question = "What's your name?"){
  let answer = prompt(question)


console.log(answer);

if (answer === ""){
  return greeter(); //recursion
}

return answer;
}
document.querySelector('h1').textContent = greeter();{
//const h1 = document.querySelector("h1");
//const textContent = h1.textContent

answer = prompt(question);

return answer;
}

const me= {
  name: "Marvin",
  age: "mentally 59"

}

//Getter
const getter = me.name;

console.log(getter);

//Setter
me.name= "Marvin"
