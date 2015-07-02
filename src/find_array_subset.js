/** find an array is subset of another array
 *
 * Created by gaurav on 1/7/15.
 */

function findSubsetWithTrick1(arr1, arr2){
    var indexOfLastFound =-1;
    for(var i=0; i<arr1.length;i++){
        var current = arr1[i],
            currentFound = false;
        console.log('Looking for ' + current + ' in parent.');
        for(var j=0; j<arr2.length; j++){
            var toMatch = arr2[j];
            if((current == toMatch) && (indexOfLastFound<j)){
                console.log('Found@'+j);
                indexOfLastFound=j;
                currentFound = true;
                break;
            }
        }
        if(false == currentFound){
            console.log('Is not subarray.');
            return;
        }
    }

    console.log('Is sub array');
}

function findSubsetWithTrick2(arr1, arr2){

}

(function driver(){
    var subarray = [11,1,3,7];
    var parent = [11,1,13,21,3,7];
    findSubsetWithTrick1(subarray, parent);
})();