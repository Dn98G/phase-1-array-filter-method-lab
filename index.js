const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

console.log(findMatching(drivers, "Sammy"));

function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

console.log(fuzzyMatch(drivers, "sa"));

function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
