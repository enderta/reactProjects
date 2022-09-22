const books = [
    {
        title: "Masumiyet Muzesi",
        Autor: "Orhan Pamuk",
        alreadyRead:true
    },

    {
        title: "An Idiot Abroad",
        Autor: "Karl Pilkington",
        alreadyRead:true
    },
    {
        title: "Simyaci",
        Autor: "Paulo Coelho ",
        alreadyRead:true
    },
    {
        title: " Lord of the Rings",
        Autor: "J. R. R. Tolkien",
        alreadyRead:false
    },
    {
        title: "Queen of Our Times: The Life of Elizabeth II",
        Autor: "Robert Hardman",
        alreadyRead:false
    },
];
let logBooks1 = () => {
    books.map((book) => {
        console.log(book.title + " by " + book.Autor);
    }
    )
}
let logBooks2 =()=>{
    books.map((book)=>{
        if(book.alreadyRead){
            console.log("You already read "+ book.title + " by " + book.Autor);
        }else{
            console.log("You still need to read "+ book.title + " by " + book.Autor);
        }
    })
};


/*
=====
Exercise 2
=====
Now modify the function, using an if/else statement to change the output depending on whether you have read it yet or not.
If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien',
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
You will need to modify the tests to check the correct output. If you have already learnt about red-green refactoring,
remember to practice:
- first change the test to the value that should be output,
- run the test to check that your test goes red
- now change your code to make the test pass
As an example for this exercise, you might do the following steps
- Modify the tests so that they all say 'You've already read <name> by <author>'
- Run the test (they will all fail)
- Modify your code so that it logs 'You've already read <name> by <author>'
- Run the test (they will all pass again)
- Modify your code making all the books alreadyRead:false and adding the if/else so that it logs 'You still need to read <name> by <author>'
- Run the test (they will all fail)
- Modify the tests to contain the correct list of statements (whether you've read the book or not)
- Run the test (the test will fail but there will be some successful results)
- Modify the books so that they have the correct alreadyRead value
- All tests should turn green!!
**/

// Write your code here


/* ======= TESTS - DO MODIFY (!!!) =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 8-reading-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("books are logged", function() {
    expectLogBooksToLog([
        "Masumiyet Muzesi by Orhan Pamuk",
        "An Idiot Abroad by Karl Pilkington",
        "Simyaci by Paulo Coelho ",
        " Lord of the Rings by J. R. R. Tolkien",
        "Queen of Our Times: The Life of Elizabeth II by Robert Hardman",

    ]);
});

/* ======= TESTS - DO NOT MODIFY ===== */
/*
* Assert that when the function logBooks is called, the values in the expectedValues array are logged in order via console.log.
*
* - If the number of calls to console.log does not match the number of elements in the array, the test will fail
* - If the calls to console.log do not contain the strings in the expectedValue array, the test will fail
*
* You do not need to understand how this function works to successfully complete the exercise.
*/
function expectLogBooksToLog(expectedValues) {
    const consoleLogSpy = jest.spyOn(console, 'log');
    logBooks();
    expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
    expectedValues.forEach((value, i) => {
        expect(consoleLogSpy).nthCalledWith(i+1, value);
    });}
consoleLogSpy.mockRestore()
