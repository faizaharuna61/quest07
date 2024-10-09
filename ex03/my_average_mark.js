function my_average_mark(param_1) {    
    let total = 0
    let result = 0;
        for (const key of param_1) {
        if (param_1.length > 0){
            total += (key['integer'])
            result=(total/param_1.length)   
        }
    }
    return result.toFixed(1)
    };
    /*
    console.log( my_average_mark([
        {"string": "John", "integer": 7},
        {"string": "Margot", "integer": 8},
        {"string": "Jules", "integer": 4},
        {"string": "Marco", "integer": 19}
       ]))
    console.log( my_average_mark([
        {"string": "Quentin", "integer": 1},
        {"string": "Fred", "integer": 1},
        {"string": "Julia", "integer": 18},
        {"string": "stephanie", "integer": 13}
       ]))
       console.log( my_average_mark([]))
    */