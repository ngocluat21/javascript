// 1.1
const game = {
  teams: ['Bayern Munich', 'Borussia Dortmund'],
  players: {
    'Bayern Munich': ['Neuer', 'Harry Kane', 'Muller', 'Lewandowski','Kimmich', 'Sane', 'Mazraoui', 'Kratzig', 'Goretzka', 'Min-jae', 'Davies'],
    'Borussia Dortmund': ['Meyer', 'Moukoko', 'Haller', 'Brandt', 'Hummels', 'Malen', 'Reyna', 'Kobei', 'Bynoe-Gittens', 'Maatsen', 'Schlotterbeck']},
  odds: {
    team1: 1.25,
    draw: 2.9,
    team2: 3.2,
  },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
}

// 1 + 2 
const [gk1, ...fieldPlayers1] = game.players['Bayern Munich'];
const players1 = [gk1, ...fieldPlayers1];

const [gk2, ...fieldPlayers2] = game.players['Borussia Dortmund'];
const players2 = [gk2, ...fieldPlayers2];

// 3
const allPlayers = [...players1, ...players2];

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisci'];

// 5
const { team1, draw, team2 } = game.odds

// 6
function printGoals(...scorers) {
  console.log(`Cầu thủ đã ghi bàn: ${scorers.join(', ')}`);
}
printGoals(...game.scored);

// 7
const winner = team1 < team2 && game.teams[0] || game.teams[1];
console.log(`Đội chiến thắng là: ${winner}`);


// 1.2

// 1
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2
const totalGoals = game.scored.length;
const avgGoals = totalGoals / game.teams.length;
console.log(`Số bàn thắng trung bình là: ${avgGoals}`);

// 3
const scorers = {};
for (let i = 0; i < game.scored.length; i++) {
  const player = game.scored[i];
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);