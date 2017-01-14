function findPrime(n){
    var primeArr;
    if (n === 2) {
        primeArr = [2];
    }else if (n === 3) {
        primeArr = [2, 3];
    }else {
        var primeArr = [2, 3];
        var flag = false;
        for (var x = 4; x <= n; x++) {
            for (var i = 2; i <= x; i++) {
                if (x != i && x % i === 0) {
                    flag = true;
                }
            }
            if (!flag) {
                primeArr.push(x);
            }
            flag = false;
        }
    }
    console.log(primeArr);
    return primeArr;
}

console.log(findPrime(100).length);
