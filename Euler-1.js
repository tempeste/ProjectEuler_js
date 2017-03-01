function q1(){
var i = 3
var total=0
while (i != 1000){
  if (i%3 === 0 || i%5===0){total += i;i = i + 1}
  else {i+=1}
}
console.log(total)
}
