/**
 * Created by Clint on 9/27/2015.
 */

console.log("Begin testing _ functions.");

/*
 map:   _.map(list, iteratee, [context]) Alias: collect
 Produces a new array of values by mapping each value in list through a transformation function (iteratee).
 --The iteratee is passed (up to) three arguments: the value, then the index (or key) of the iteration, and finally a reference to
 the entire list.   **...does the index/key default as 0 if it is not specified?
*EX.:
 _.map([1, 2, 3], function(num){ return num * 3; });
 => [3, 6, 9]
 _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
 => [3, 6, 9]
 _.map([[1, 2], [3, 4]], _.first);
 => [1, 3]
 */

/* globals _, uhdata */

var wordArr = ["I", "love", "cookies", "and", "cream"];

function caps(word, key) {
    return word.toUpperCase();
}

var capsWordArr = _.map(wordArr, caps);

console.log(capsWordArr);


function wordLength(word) {
    return word + " " + word.length;
}

function addLength(words) {
    return _.map(wordArr, wordLength, 0);
}

console.log(addLength(wordArr));
