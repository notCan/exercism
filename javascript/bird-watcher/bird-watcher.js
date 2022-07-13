export function totalBirdCount(birdsPerDay) {
  var top =0
  for(var i=0;i<birdsPerDay.length;i++){
    top = top + birdsPerDay[i]
  }
  return top
}

export function birdsInWeek(birdsPerDay, week) {
  var skipDays = (week-1) * 7
  var top =0
  if(1<week){
    var newList = birdsPerDay.splice(skipDays,birdsPerDay.length)
    for(var i=0;i<7;i++){
      top = top + newList[i]
    }
  } else {
    for(var i=0;i<7;i++){
      top = top + birdsPerDay[i]
    }
  }
  return top
}

export function fixBirdCountLog(birdsPerDay) {
  for(let i=0;i<birdsPerDay.length;i++){
    if(i%2==0){
      birdsPerDay[i] = birdsPerDay[i] + 1
    }else birdsPerDay[i] = birdsPerDay[i]
  }
  return birdsPerDay
}
