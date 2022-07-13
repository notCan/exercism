
export function frontDoorResponse(line) {
  return line[0]
}

export function frontDoorPassword(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1,word.length).toLowerCase()
}


export function backDoorResponse(line) {
  var l = line.trim()
  var s = l.slice(l.length-1,l.length)
  return s
}

export function backDoorPassword(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1,word.length).toLowerCase() + ", please"
}
