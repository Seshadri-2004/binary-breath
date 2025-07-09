# 🔁 binaryBreath Function

A simple JavaScript function to generate a binary pattern string based on even and odd index logic.

---

## 📄 Problem Statement

Create a function named `binaryBreath` that receives a number `n`.

The function will:

1. Initialize a variable `breath` to an empty string.
2. Loop from `0` to `n` (inclusive):
   - If `i` is even, add `'10'` to `breath`.
   - If `i` is odd, add `'01'` to `breath`.
3. Return the `breath` string.

---

## 📦 Source Code

```javascript
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
```

---

## 🧪 Example

```javascript
console.log(binaryBreath(3)); 
```

**Output:**

```
10011001
```

**Explanation:**

- i = 0 → "10"
- i = 1 → "01"
- i = 2 → "10"
- i = 3 → "01"

Result: **"10011001"**

---

## ✅ Usage

You can use this function in any JavaScript environment (browser console, Node.js, etc.):

```javascript
console.log(binaryBreath(5)); // Output: 100110011001
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Feel free to fork this repo, improve the code, or open an issue or pull request. Contributions are always welcome!
