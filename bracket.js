const south = [
  [{ seed: 1, team: "Auburn" }, { seed: 16, team: "ALST/SFU" }],
  [{ seed: 8, team: "Louisville" }, { seed: 9, team: "Creighton" }],
  [{ seed: 5, team: "Michigan" }, { seed: 12, team: "UC San Diego" }],
  [{ seed: 4, team: "Texas A&M" }, { seed: 13, team: "Yale" }],
  [{ seed: 6, team: "Ole Miss" }, { seed: 11, team: "SDSU/UNC" }],
  [{ seed: 3, team: "Iowa St." }, { seed: 14, team: "Lipscomb" }],
  [{ seed: 7, team: "Marquette" }, { seed: 10, team: "New Mexico" }],
  [{ seed: 2, team: "Michigan St." }, { seed: 15, team: "Bryant" }]
]

const west = [
  [{ seed: 1, team: "Florida" }, { seed: 16, team: "Norfolk St" }],
  [{ seed: 8, team: "UConn" }, { seed: 9, team: "Oklahoma" }],
  [{ seed: 5, team: "Memphis" }, { seed: 12, team: "Colorado St" }],
  [{ seed: 4, team: "Maryland" }, { seed: 13, team: "Grand Canyon" }],
  [{ seed: 6, team: "Missouri" }, { seed: 11, team: "Drake" }],
  [{ seed: 3, team: "Texas Tech" }, { seed: 14, team: "UNCW" }],
  [{ seed: 7, team: "Kansas" }, { seed: 10, team: "Arkansas" }],
  [{ seed: 2, team: "St. John's" }, { seed: 15, team: "Omaha" }]
]

const east = [
  [{ seed: 1, team: "Duke" }, { seed: 16, team: "AMER/MTSM" }],
  [{ seed: 8, team: "Miss. St" }, { seed: 9, team: "Baylor" }],
  [{ seed: 5, team: "Oregon" }, { seed: 12, team: "Liberty" }],
  [{ seed: 4, team: "Arizona" }, { seed: 13, team: "Akron" }],
  [{ seed: 6, team: "BYU" }, { seed: 11, team: "VCU" }],
  [{ seed: 3, team: "Wisconsin" }, { seed: 14, team: "Montana" }],
  [{ seed: 7, team: "Saint Mary's" }, { seed: 10, team: "Vanderbilt" }],
  [{ seed: 2, team: "Alabama" }, { seed: 15, team: "Robert Morris" }]
]

const midwest = [
  [{ seed: 1, team: "Houston" }, { seed: 16, team: "SIUE" }],
  [{ seed: 8, team: "Gonzaga" }, { seed: 9, team: "Georgia" }],
  [{ seed: 5, team: "Clemson" }, { seed: 12, team: "McNeese" }],
  [{ seed: 4, team: "Purdue" }, { seed: 13, team: "High Point" }],
  [{ seed: 6, team: "Illinois" }, { seed: 11, team: "TEX/XAV" }],
  [{ seed: 3, team: "Kentucky" }, { seed: 14, team: "Troy" }],
  [{ seed: 7, team: "UCLA" }, { seed: 10, team: "Utah St." }],
  [{ seed: 2, team: "Tennessee" }, { seed: 15, team: "Wofford" }]
]

const finalFour = []

const bracketSim = (bracket) => {
  console.log(bracket);
  if (bracket.length < 2) {
    if (bracket[0][0].seed <= bracket[0][1].seed) {
      seedLeft = bracket[0][0].seed
      seedRight = bracket[0][1].seed
    } else {
      seedLeft = bracket[0][1].seed
      seedRight = bracket[0][0].seed
    }

    let max = seedLeft + seedRight;
    let randomSelection = Math.floor(Math.random() * max) + 1;

    if (randomSelection > seedRight) {
      let result = bracket[0].find(team => team.seed === seedRight);
      console.log("Winner:", result);

      if (finalFour.length < 1) {
        finalFour.push([result])
      }
      else if (finalFour.length < 2) {
        if (finalFour[0].length < 2) {
          finalFour[0].push(result)
        } else {
          finalFour.push([result])
        }
      } else {
        finalFour[1].push(result);
      }

    } else {
      let result = bracket[0].find(team => team.seed === seedLeft);
      console.log("Winner:", result);

      if (finalFour.length < 1) {
        finalFour.push([result])
      }
      else if (finalFour.length < 2) {
        if (finalFour[0].length < 2) {
          finalFour[0].push(result)
        } else {
          finalFour.push([result])
        }
      } else {
        finalFour[1].push(result);
      }

    }
    return;
  }

  let nextRound = [];

  for (let i = 0; i < bracket.length; i += 2) {
    let temp = [];
    const topGame = bracket[i];
    const bottomGame = bracket[i + 1];

    let seedLeft
    let seedRight

    if (topGame[0].seed <= topGame[1].seed) {
      seedLeft = topGame[0].seed
      seedRight = topGame[1].seed
    } else {
      seedLeft = topGame[1].seed
      seedRight = topGame[0].seed
    }
    let max = seedLeft + seedRight;
    let randomSelection = Math.floor(Math.random() * max) + 1;

    if (randomSelection > seedRight) {
      let result = topGame.find(team => team.seed === seedRight);
      console.log("Winner:", result);
      temp.push(result);
    } else {
      let result = topGame.find(team => team.seed === seedLeft);
      console.log("Winner:", result);
      temp.push(result);
    }

    if (bottomGame[0].seed <= bottomGame[1].seed) {
      seedLeft = bottomGame[0].seed
      seedRight = bottomGame[1].seed
    } else {
      seedLeft = bottomGame[1].seed
      seedRight = bottomGame[0].seed
    }

    max = seedLeft + seedRight;
    randomSelection = Math.floor(Math.random() * max) + 1;

    if (randomSelection > seedRight) {
      let result = bottomGame.find(team => team.seed === seedRight);
      console.log("Winner:", result);
      temp.push(result);
    } else {
      let result = bottomGame.find(team => team.seed === seedLeft);
      console.log("Winner:", result);
      temp.push(result);
    }

    nextRound.push(temp);
  }

  bracketSim(nextRound);
}

console.log("SOUTH");
bracketSim(south);

console.log("\n\n\nWEST");
bracketSim(west);

console.log("\n\n\nEAST");
bracketSim(east);

console.log("\n\n\nMIDWEST");
bracketSim(midwest);

console.log("\n\n\nFINAL FOUR");
bracketSim(finalFour);
