function q2(){
var fib = []
var a = 0
var b = 1
var f = 1
var sum = 0
while (f <= 4000000){
  f = a+b
  a = f-a
  b = f
  fib.push(f)
}
for (i=0; i<fib.length; i++){
  if (fib[i] % 2 === 0){
    sum += fib[i]
  }
}
console.log(sum)
}
