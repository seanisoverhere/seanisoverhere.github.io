// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // YOUR CODE GOES HERE
    let book = document.getElementById("book_chapter");
    let paragraph = book.getElementsByTagName("p");

    let wordLength = parseInt(prompt("Enter word length (words longer than this length will be highlighted for you"));

    for (const elem of paragraph) {
        let newArray = [];
        let wordArray = elem.innerText.split(" ");

        for (word of wordArray) {
            if (wordLength < word.length) {
                word = `<mark>${word}</mark>`;
            }
            newArray.push(word);
        }
        
        elem.innerHTML = newArray.join(" ");
    }

}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    let book = document.getElementById("book_chapter");
    let wordCount = book.getElementsByTagName("span");
    let paragraph = book.getElementsByTagName("p");

    let i = 0;

    for (const elem of paragraph) {
        let wordLength = elem.innerText.split(" ").length;
        wordCount[i].innerHTML = `<strong>(${wordLength} words)</strong>`
        i++;
    }

}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
    let book = document.getElementById("book_chapter");
    let paragraph = book.getElementsByTagName("p");

    for (const elem of paragraph) {
        let sentence = elem.innerHTML;
        let replace = sentence.replace(/,/g, "⭐️").replace(/!/g, "❗️").replace(/\?/g, "❓");
        elem.innerHTML = replace;
    }

}