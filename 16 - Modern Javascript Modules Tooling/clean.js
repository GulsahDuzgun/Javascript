'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 300;
console.log(spendingLimits);

const getLimit = (user, limits) => limits?.[user] ?? 0;

const addExpense = function (
  budget,
  spendingLimits,
  value,
  description,
  user = 'jonas'
) {
  const copyUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  return value <= getLimit(copyUser, spendingLimits)
    ? [...budget, { value: -value, description, user }]
    : budget;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpense = function (data, limits) {
  // return data.map(entry => {
  //   return entry.value < -getLimit(entry.user, limits)
  //     ? { ...entry, flag: 'limit' }
  //     : entry;
  // });

  return data.map(entry =>
    entry.value < -getLimit(entry.user, limits)
      ? { ...entry, flag: 'limit' }
      : entry
  );
};

const finalArr = checkExpense(newBudget3, spendingLimits);

const logBigExpenses = function (bigLimit, state) {
  // let output = '';
  // for (const entry of budget) {
  //   entry.value <= -bigLimit
  //     ? (output += `${entry.description.slice(-2)} / `)
  //     : ''; // Emojis are 2 chars
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-3))
    .join('/');
  console.log(bigExpenses);
};

logBigExpenses(200, finalArr);

console.log(budget);
