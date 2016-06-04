angular.module("quoteBook").service("dataService", function() {
//GET QUOTE FROM ARRAY
    this.getQuote = function() {
        return quotes;
    }; //getQuote

// ADD QUOTE TO ARRAY
    this.addQuote = function(newQuote) {
        if (newQuote.text && newQuote.author) { //addQuote is the function and newQuote should be added to Controller and from there to View via the scope
            quotes.unshift(newQuote);
            return true;
        }
        return false;
    }; //addQuote

// REMOVE QUOTE TO ARRAY
    this.removeQuote = function(textToRemove) {
        for (var i = 0; i < quotes.length; i++) {
            if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()) {
                quotes.splice(i--, 1);
            }
        }
    }; //removeQuote

//QUOTE ARRAY
    var quotes = [{
        text: 'Life isn\'t about getting and having, it\'s about giving and being.',
        author: 'Kevin Kruse'
    }, {
        text: 'Whatever the mind of man can conceive and believe, it can achieve',
        author: 'Napoleon Hill'
    }, {
        text: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein'
    }, {
        text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
        author: 'Robert Frost'
    }, {
        text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart'
    }, {
        text: 'Life is what happens to you while you\'re busy making other plans.',
        author: 'John Lennon'
    }, {
        text: 'What even is a jQuery?',
        author: 'Tyler S. McGinnis'
    }];




}); //dataService
