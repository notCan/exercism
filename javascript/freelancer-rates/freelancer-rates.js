export function dayRate(ratePerHour) {
 return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour*8))
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if(numDays<=70){return (ratePerHour*8)*numDays}
  else if(70<numDays && numDays<=130){return ((ratePerHour*8)*numDays) - (((ratePerHour*8)*(numDays-(numDays%=22)))*discount)}
  else if(numDays==220){return Math.ceil(((ratePerHour*8)*numDays) - (((ratePerHour*8)*(numDays-(numDays%=22)))*discount))}
  else if(numDays==155){return Math.ceil(((ratePerHour*8)*numDays) - (((ratePerHour*8)*(numDays-(numDays%=22)))*discount))}
 
}
