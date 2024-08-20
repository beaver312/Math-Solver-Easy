function solveMath() {
    const input = document.getElementById("mathInput").value;

    try {
        // Using the JavaScript eval() function to solve basic math expressions
        const result = eval(input);
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (e) {
        document.getElementById("result").innerText = "Error: Invalid expression";
    }
}
