
// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
  let bmi = weight/(height * height)
  
  if (bmi <= 18.5) return "Underweight"
  if (bmi <= 25) return "Normal"
  if (bmi <= 30) return "Overweight"
  
  return "Obese";
}


// DNA to RNA Conversion
function DNAtoRNA(dna) {
  let rna = []
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      rna[i] = 'U'
    }
    else {
      rna[i] = dna[i]
    }
  }
  return rna.join('')
}
