// factory function to create new candidates
const createCandidate = function(name, electionResults, totalVotes) {
  const politician = {
    name: name,
    electionResults: electionResults,
    totalVotes: totalVotes
  };
  return politician;
}

// create candidates
const maddieReiff = createCandidate("Maddie Reiff", null, 332);
const lilyRose = createCandidate("Lily Rose", null, 206);

