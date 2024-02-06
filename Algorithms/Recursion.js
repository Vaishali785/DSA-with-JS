let counter = 0;
function inception() {
    if (counter > 3) {
        return "done";
    }
    counter++;
    return inception();
}

inception();


// *** Recursion is not an algorithm but its a concept, a very important concept.
// 1. Identify the base case (or stop point). 
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed. Usually you have 2 returns.