exports.calculateAge = (dateString) => {
  var date = new Date(dateString); // Convert the date string to a Date object
  var today = new Date(); // Get today's date

  var age = today.getFullYear() - date.getFullYear(); // Calculate the difference in years

  // Check if the birthday hasn't happened yet this year
  if (
    today.getMonth() < date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
  ) {
    age--; // Subtract 1 from the age
  }

  return age;
};
