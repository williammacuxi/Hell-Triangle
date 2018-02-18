this.HellTriangle = (function(){
    function isValidTriangle(arr){
        if (typeof arr !== 'object' || arr === null || arr.length < 1 || arr.length === undefined) {
            throw 'Incorrect triangle type.';
        }

        for (var i = 0; i < arr.length; i++) {
            if(arr[i].length !== i+1){
                throw 'Not a triangle array.';
            }
            for (var j = 0; j < arr[i].length; j++) {
                if (typeof arr[i][j] != 'number') {
                    throw 'Not a number.';
                }
            }
        }

        return true;
    }

    function calculate(arr){
        var lastIndex = 0,
            sum = 0;

        isValidTriangle(arr);

        sum = arr[0][0];

        for (var i = 1; i < arr.length; i++) {
            sum += arr[i][lastIndex] > arr[i][lastIndex+1] ? arr[i][lastIndex] : arr[i][lastIndex+1];
        }

        return sum;
    }

    return{
        calculate: calculate
    }
}());
