function countDigits (num){
    if (num < 0){return -1}
    else{
        var num2 = Math.floor(num)
        var num3 = String(num2)
        return num3.length        
    }
}