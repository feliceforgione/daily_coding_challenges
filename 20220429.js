function uncompress(str) {
    const nums = '0123456789'
    let strcompress = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        if (!nums.includes(str[j])) {
          strcompress.push(str[j].repeat(Number(str.slice(i, j))));
          i = j;
          break;
        }
      }
    }
    return strcompress.join('')
  }
  
  console.log(uncompress("3n12e2z"));