// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter( item => typeof(item) == 'number')
}



function accum(s) {
	return s.split('').map( (lett, i) => {
    let str = lett.repeat(i+1).toLowerCase() 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }).join('-')
}
