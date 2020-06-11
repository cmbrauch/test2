//const duckStats = [2, 3, 1, 6];
//
//let doublePowerDuck = [];
//for (let i = 0; i < duckStats.length; i++) {
//  doublePowerDuck.push(duckStats[i] * 2);
//}
//
//let triplePowerDuck = [];
//for (let i = 0; i < duckStats.length; i++) {
//  triplePowerDuck.push(duckStats[i] * 3);
//}

//const duckStats = [2, 3, 1, 6];
//
//const doublePowerDuck = duckStats.map(function(element) {
//  return element * 2;
//});
//
//const triplePowerDuck = duckStats.map(function(element) {
//  return element * 3;
//});

const duckStats = [2, 3, 1, 6];

function duckStatModifier(statArray, multiplier) {
  return statArray.map(function(element) {
    return element * multiplier +1;
  });
  return duckStatArray;
}

const doublePowerDuck = duckStatModifier(duckStats, 2);
const triplePowerDuck = duckStatModifier(duckStats, 3);