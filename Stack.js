
/*
class Stack {

    constructor()
    {
        this.items = [];
    }

    push(element)
{   
    this.items.push(element);
}

pop()
{
    if (this.items.length == 0)
        return 'Underflow'
    return this.items.pop();
}

// peek function
peek()
{
    return this.items[this.items.length - 1];
}

// isEmpty function
isEmpty()
{
    return this.items.length == 0;
}

// printStack function
printStack()
{
    let str = "";
    for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}


}

// creating object for stack class
let stack = new Stack();
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
stack.push(600)
console.log(stack.isEmpty()); 
console.log(stack.printStack())

// returns Underflow
console.log(stack.pop()); 

*/
/*
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
}

function postFixEvaluation(exp) {
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can not perform postfix evaluation";
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }

    return stack.pop();
}


console.log(postFixEvaluation("235*+8-")); 


console.log(postFixEvaluation("23*+"));
*/

function evaluatePrefix(expression) {
    
    const stack = [];

    const tokens = expression.split(' ');

    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const a = stack.pop();
            const b = stack.pop();
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }
        }
    }

    
    if (stack.length !== 1) {
        throw new Error('Invalid prefix expression');
    }

    return stack.pop();
}


const prefixExpression = "+ 3 * 4 2";
const result = evaluatePrefix(prefixExpression);
console.log(`Result: ${result}`); 
