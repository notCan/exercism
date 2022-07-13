
export function canExecuteFastAttack(knightIsAwake) {
  if(knightIsAwake==true){return false}else{return true}
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake==true && archerIsAwake==true && prisonerIsAwake==true){return true}
  else if(knightIsAwake==false && archerIsAwake==false && prisonerIsAwake==true){return true}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==false){return true}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==true){return true}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==false){return true}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==true){return true}
  else{return false}
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(archerIsAwake==false && prisonerIsAwake==false){return false}
  else if(archerIsAwake==false && prisonerIsAwake==true){return true}
  else if(archerIsAwake==true && prisonerIsAwake==false){return false}
  else{return false}
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if(knightIsAwake==false && archerIsAwake==false && prisonerIsAwake==false && petDogIsPresent==false){return false}
  else if(knightIsAwake==false && archerIsAwake==false && prisonerIsAwake==false && petDogIsPresent==true){return true}
  else if(knightIsAwake==false && archerIsAwake==false && prisonerIsAwake==true && petDogIsPresent==false){return true}
  else if(knightIsAwake==false && archerIsAwake==false && prisonerIsAwake==true && petDogIsPresent==true){return true}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==false && petDogIsPresent==false){return false}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==false && petDogIsPresent==true){return false}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==true && petDogIsPresent==false){return false}
  else if(knightIsAwake==false && archerIsAwake==true && prisonerIsAwake==true && petDogIsPresent==true){return false}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==false && petDogIsPresent==false){return false}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==false && petDogIsPresent==true){return true}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==true && petDogIsPresent==false){return false}
  else if(knightIsAwake==true && archerIsAwake==false && prisonerIsAwake==true && petDogIsPresent==true){return true}
  else if(knightIsAwake==true && archerIsAwake==true && prisonerIsAwake==false && petDogIsPresent==false){return false}
  else if(knightIsAwake==true && archerIsAwake==true && prisonerIsAwake==false && petDogIsPresent==true){return false}
  else if(knightIsAwake==true && archerIsAwake==true && prisonerIsAwake==true && petDogIsPresent==false){return false}
  else{return false}
}
