function my_array_uniq(param_1) {
    var a = [];
    for (var i=0, l=param_1.length; i<l; i++)
        if (a.indexOf(param_1[i]) === -1 && param_1[i] !== '')
            a.push(param_1[i]);
    return a;
}
//console.log(my_array_uniq([1, 1, 2]))
//console.log(my_array_uniq([]))
//console.log(my_array_uniq([1, 1, 1, 2, 3, 4, 1]))