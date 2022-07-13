
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
      return 1.5
      break;
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

export function limesToCut(wedgesNeeded,limes){
  let wedges=0;
  let total=0;
  let i=0;
  while((i<limes.length)&&(total<=wedgesNeeded)){
    switch(limes[i]){
      case'small':
        wedges=6
        break;
      case'medium':
        wedges=8
        break;
      case'large':
        wedges=10
        break;
      default:
        wedges=0;
    }
    total+=wedges;
    if(wedgesNeeded!==0){
      i++;
    }
  }
  return i;
}

export function remainingOrders(timeLeft,orders){
  let min = 0;
  let array = [...orders]
  for(let i = 0; timeLeft >=min; i++){
    min = min + timeToMixJuice(orders[i])
    array.shift();
    if(min>=timeLeft){
      break;
    }
  }
  return array
}
