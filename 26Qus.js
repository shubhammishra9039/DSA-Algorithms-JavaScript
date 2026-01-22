// 42. Print powers of 2 up to 2^5.


// Output:
// 1 2 4 8 16 32

function tableNumber(length) {
    let num = 1
    for (let i = 1; i <= length; i++) {
        if (num == 1) {
            console.log(num)
            num = num + 1
            console.log(num)


        }
        num = num * 2

        console.log(num)
    }
}
tableNumber(5)
