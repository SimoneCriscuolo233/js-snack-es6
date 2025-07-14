const bikes = [
  {
    name: `RCR-F PRO`,
    weigth: 8.2,
  },
  {
    name: `NCR CF`,
    weigth: 9,
  },
  {
    name: ` RCR-R PRO`,
    weigth: 6.9,
  },
  {
    name: `EDR AF`,
    weigth: 2.2,
  }
]
let lighter = bikes[0];
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].weigth < lighter.weigth) {
    lighter = bikes[i]
  }

}
let weigthResult = document.createElement("h2")
console.log(lighter)
const result = (ob) => {

  for (key in ob) {
    weigthResult.textContent += ` ${lighter[key]}`
  }

};
result(lighter)
document.body.appendChild(weigthResult)
console.log(weigthResult)

const squads = [
  {
    name: `Inter`,
    pointsScored: 0,
    foulsSuffered: 0
  },
  {
    name: `Milan`,
    pointsScored: 0,
    foulsSuffered: 0
  },
  {
    name: `Napoli`,
    pointsScored: 0,
    foulsSuffered: 0
  },
  {
    name: `Juventus`,
    pointsScored: 0,
    foulsSuffered: 0
  }
];

for (let i = 0; i < squads.length; i++) {
  squads[i].pointsScored = Math.floor(Math.random() * 100)
  squads[i].foulsSuffered = Math.floor(Math.random() * 30)
};
let squadsFouls = [];
for (let i = 0; i < squads.length; i++) {
  squadsFouls.push({
    nome: squads[i].name,
    foulsSuffered: squads[i].foulsSuffered
  });
};
console.log(squads, squadsFouls)


