// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.

function DNAStrand(dna){
    let rna = dna.split('').map( n => {
        if (n == 'T') return 'A'
        if (n == 'A') return 'T'
        if (n == 'G') return 'C'
        if (n == 'C') return 'G'
    }).join('')
    
    return rna
    
  }