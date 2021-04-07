function distanceFromHqInBlocks(block) {
if (42 > block) {
    return 42 - block
} else {
    return block - 42
}
}

function distanceFromHqInFeet (feet) {
    distanceFromHqInBlocks(feet);
    if(feet > 42 && feet < 45) {
        return feet + 221
    } else if(feet > 42 && feet < 52) {
        return feet + 2062
    } else {
       return 2078 + feet
    }
  } 

function distanceTravelledInFeet(block) {
    if(block >= 43 && block <= 48) {
        return block + 1277
    } else if(block >= 50 && block <= 60) {
        return block + 2590
    } else(block >= 28 && block <= 34)
        return block + 1550
}

function calculatesFarePrice(destination) {
    if(destination >= 43 && destination <= 44) {
        return destination - 43
    } else if(destination <= 34) {
        return destination / 13.28125
    } else if(destination >= 50 && destination <= 58) {
        return destination - 25
    } else(destination > 34)
    return "cannot travel that far"
}