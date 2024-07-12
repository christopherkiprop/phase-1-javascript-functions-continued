// code your solution here
// Define saturdayFun function declaration with default activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function expression with default activity
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define wrapAdjective function to wrap an adjective in a highlight
  function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  // Exporting functions to be accessible in other modules
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  
