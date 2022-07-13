
export function needsLicense(kind) {
  if(kind==='car' || kind==='truck') return true;
  else return false;
}

export function chooseVehicle(option1, option2) {
  if(option1<option2) return option1 +' is clearly the better choice.'
  else if(option2<option1) return option2+' is clearly the better choice.'
}

export function calculateResellPrice(originalPrice, age) {
  if(age<3) { 
    var price = originalPrice - (originalPrice * 0.2)
    return price }
  else if(3<=age && age<=10) { 
    var price = originalPrice - (originalPrice * 0.3)
      return price }
  else  {
    var price = originalPrice - (originalPrice * 0.5)
      return price }
}
