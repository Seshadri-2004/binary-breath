function binaryBreath(n) {
    let breath = "";
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            breath += '10';
        } else {
            breath += '01';
        }
    }
    return breath;
}

// Example usage
console.log(binaryBreath(3)); // Output: "10011001"
