// Descending Order
function descendingOrder(n){
    return Number(String(n).split('').sort( (a,b) => {
       return b-a
     }).join(''))
   }