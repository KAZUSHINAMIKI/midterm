function calc (array){
    if (array.length == 3){
        if (array[1] == "+"){
            var add = array[0] + array[2]
            return add
        }else{var minus = array[0] - array[2]
            return minus}
    }
    else{var n = 0
         var Ans
         var answerplus
         var answerminus
        while (n == array.length - 2){
            if (array[n + 1] = "+"){answerplus = array[n]+ array[n+2]}
            else{answerminus =array[n] - array [n+2]}
            n= n + 2
            Ans = answerplus + answerminus
        }
        return Ans
    }
}