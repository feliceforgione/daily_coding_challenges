/* you have an array of vendors, each entry is an array of food items that vendor sells. Display the unique menu items sold by all vendors */

const vendors = [
  ["pizza", "pasta"],
  ["pizza", "calzones"],
  ["lobster"],
  ["calzones"],
];

const uniqueMenuItems: string[] = [
  ...new Set(vendors.reduce((acc, vendor) => [...acc, ...vendor], [])),
];

// Using flat()
const uniqueMenuItems2: string[] = [...new Set(vendors.flat())];

console.log(uniqueMenuItems);
console.log(uniqueMenuItems2);
