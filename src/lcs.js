/**
 * Created by gaurav on 2/7/15.
 */

var c = null;
DIRECTION = {
    NONE : ' ',
    DIAGONAL: "\\",
    UP: '^',
    LEFT: '<'
};

var Node  = function () {
    this.direction =  DIRECTION.NONE;
    this.weight = 0;
};
Node.prototype.toString = function NodeToSting(){
    return this.weight;
};

function findLcs(str1, str2){
    var lenA = str1.length+1,
        lenB = str2.length+1;
    c = new Array(lenA);
    for(var i=0;i<lenA;i++){
        c[i] = new Array(lenB);
    }

    for(var i=0;i< c.length;i++){
        var row = c[i];
        for(var j=0;j<row.length;j++){
            c[i][j] = new Node();
        }
    }

    LCS(str1,str2);

    // ****************** logging *******************
    var d = "";
    for(var k=0;k<str2.length;k++){
        d = d + " \t "+str2[k];
    }
    console.log(d);
    for(var i = 0; i< c.length;i++){
        var row = c[i];
            log = i>0? str1[i-1]: " ";
        for(var j = 0; j< row.length;j++){
            log = log + c[i][j].direction + c[i][j].weight + '\t';
        }
        console.log(log);
    }
};

function LCS(str1, str2){
    for(var i=1;i<=str1.length;i++){
        for(var j=1;j<=str2.length;j++){
            if(str1[i-1] == str2[j-1]){
                c[i][j].weight = c[i-1][j-1].weight + 1;
                c[i][j].direction = DIRECTION.DIAGONAL;
            }else if(c[i-1][j].weight>=c[i][j-1].weight){
                c[i][j].weight = c[i-1][j].weight;
                c[i][j].direction = DIRECTION.UP;
            }else{
                c[i][j].weight = c[i][j-1].weight;
                c[i][j].direction = DIRECTION.LEFT;
            }
        }
    }
};


(function driver(){
    //var node1 = new Node();
    //console.log(""+node1);
    findLcs("venkeshwara", "sourav");
})();
