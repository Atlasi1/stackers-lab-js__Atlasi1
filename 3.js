function calc(oper, n1, n2) {
    switch (oper) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "/":
            if (n2 !== 0) return n1 / n2;
            else return "Ошибка";
        case "*":
            return n1 * n2;
        default:
            return "Ошибка";
    }
}

console.log(calc("/", 0, 2))