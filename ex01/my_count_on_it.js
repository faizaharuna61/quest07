/*function my_count_on_it (param_1) {
    var newArr = [];
  
    for(var i = 0; i < param_1.length; i++) {
    
      var str = newArr[i].trim();
      return str;
    }
}*/
function my_count_on_it(array){
    return array.map(function(number){
        return number.length
    })
}
console.log(my_count_on_it(["This", "is", "the", "way"]))
console.log(my_count_on_it(["aBc", "AbcE Fgef1"]))
console.log(my_count_on_it(["aBc"]))    