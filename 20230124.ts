// Find person with highest salary using reduce
type Person = {
  name: string;
  salary: number;
};

const people = [
  {
    name: "Dom",
    salary: 65000,
  },
  {
    name: "Jonny",
    salary: 80000,
  },
  {
    name: "Christina",
    salary: 72000,
  },
];

function highestPaidPerson(people: Person[]): Person {
  return people.reduce((currentHighestPaid: Person, currentPerson: Person) => {
    if (
      currentHighestPaid == null ||
      currentPerson.salary > currentHighestPaid.salary
    ) {
      return currentPerson;
    }
    return currentHighestPaid;
  }, null);
}

console.log(highestPaidPerson(people));
