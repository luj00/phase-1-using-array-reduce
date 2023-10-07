const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Define the reducer function
function reducer(batteryArray) {
  // Initialize totalBatteries variable
  let totalBatteries = 0;

  // Iterate through the batteryArray and calculate the sum
  batteryArray.forEach(battery => {
    totalBatteries += battery;
  });

  // Return the totalBatteries
  return totalBatteries;
}

// Calculate the total number of batteries
const totalBatteries = reducer(batteryBatches);

// Log the result
console.log(`Total number of batteries: ${totalBatteries}`);
