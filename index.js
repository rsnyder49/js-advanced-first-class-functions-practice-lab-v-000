// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(arr) {
    console.log(arr.name);
  });
}
  
function logDriversByHometown(array, town) {
  array.forEach(function(arr) {
    if (arr.hometown === town) {
      console.log(arr.name);
    }
  });
}

function driversByRevenue(array) {
  let newDrivers = Object.create(drivers);
  return newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}