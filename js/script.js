// factory function to create new candidates
const createCandidate = function (name, electionResults, partyColor) {
  const politician = {
    name: name,
    electionResults: electionResults,
    totalVotes: function () {
      this.totalVotes = 0;
      for (let i of this.electionResults) {
        this.totalVotes += i;
      }
    },
    partyColor: partyColor
  }; // end object
  politician.totalVotes();
  return politician;
};

// create election results and array of state names
const mrResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
const lrResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
const stateNames = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

// create candidates
const maddieReiff = createCandidate("Maddie Reiff", mrResults, [132, 17, 11]);
const lilyRose = createCandidate("Lily Rose", lrResults, [245, 141, 136]);

// function to determine overall winner
const electionWinner = function () {
  let winner = "";
  if (maddieReiff.totalVotes > lilyRose.totalVotes) {
    winner = maddieReiff.name;
  } else if (maddieReiff.totalVotes < lilyRose.totalVotes) {
    winner = lilyRose.name;
  }
  return winner;
};
const overallWinner = electionWinner();
console.log(maddieReiff, lilyRose);
console.log(overallWinner);

// function to assign the winner of each state
const winnerPerState = [];
const setStateResults = function (state) {
  let stateWinner = "";
  if (mrResults[state] > lrResults[state]) {
    stateWinner = maddieReiff.name;
  } else if (mrResults[state] < lrResults[state]) {
    stateWinner = lilyRose.name;
  }
  winnerPerState.push(stateWinner);
};
stateNames.forEach(function (state, index) {
    setStateResults(index);
});
console.log(winnerPerState);