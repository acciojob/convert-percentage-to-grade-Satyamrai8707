function calculateGrade(percentage) {
  // Convert input to number
  if (isNaN(percentage)) {
    return "F";
  }

  // Round to nearest integer
  percentage = Math.round(percentage);

  // Handle negative values
  if (percentage < 0) {
    return "F";
  }

  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
