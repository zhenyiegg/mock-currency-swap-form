// Problem 1:

var sum_to_n_a = function (n) {
    return (n * (n + 1)) / 2;
    // Using Math
};

var sum_to_n_b = function (n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_b(n - 1);
    }
    // Using If and Else recursive functions
};

var sum_to_n_c = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    // Using For Loop
};
