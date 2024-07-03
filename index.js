// Code your solution here

function findMatching(drivers, driverName) {
  const name=driverName.toLowerCase();
  return drivers.filter(drive=>drive.toLowerCase()===name);
}
findMatching(drivers, "Bobby");
findMatching(drivers, 'Sammy');
findMatching(drivers, 'Susan');

function fuzzyMatch(drivers, drive) {
  const drr= drive.toLowerCase(); 
  return drivers.filter(driver => driver.toLowerCase().startsWith(drr));
}
fuzzyMatch(drivers, 'Sa');
fuzzyMatch(drivers, 'y');
fuzzyMatch(drivers, 'mm');

function matchName(drivers, namee){
  return drivers.filter(drive=>drive.name===namee)
}
matchName(drivers, 'Bobby');