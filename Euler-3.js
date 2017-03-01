function largestPrime(num){
  var factor = 2
  while (num != factor){
    if(num%factor ===0){
      num=num/factor
    }
    else{
      factor += 1
    }
  }
  return factor
}

largestPrime(600851475143)
