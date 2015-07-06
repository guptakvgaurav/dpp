/**
 * Given: A sequence of string.
 * Objective:  To find longest subsequence which is palindrome.
 * Reference: http://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/
 * Created by gaurav on 6/7/15.
 */

var sequence = null,
    subSequence = '';

var findLP = function(i, j, subSequence){
    if(i == j){
        return sequence[i];
    }
    if( (i==(j+1)) && (sequence[i]!==sequence[j])){
        return "";
    }
    if( (i==(j+1)) && (sequence[i]==sequence[j])){
        return "";
    }
    if(sequence[i]==sequence[j]){
        var f = sequence[i] + findLP(i+1, j-1, subSequence) + sequence[j];
        console.log('(%d, %d)\tSubsequence: %s',i,j, f);
        return f;
    }
    if(sequence[i]!==sequence[j]){
        var t = findLP(i+1,j, subSequence),
            t1= findLP(i,j-1, subSequence);
        console.log('(%d, %d)\tMax of > %s\t%s',i, j, t, t1);
        return (t.length >= t1.length)?(t):(t1);
    }
};

function find(str){
    sequence = str;
    var start = 0,
        end = sequence.length -1;
    return findLP(start, end, "");
}

(function(){
    console.log(find("GEEKSFORGEEKS"));
    console.log(subSequence);
})();
