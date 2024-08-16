export function logMultiplier(bid) { 
    if (bid <= 100) return 0;
  
    const basePoints = 110;  // Points for the minimum bid of 100
    const incrementRate = 0.1; 
  
    // Calculate multiplier based on bid
    const multiplier = Math.floor((bid - 100) / 1000) + 1;
    const points = basePoints + (multiplier * 1); // Adjust 90 to control the increase
  
    return points;
  }
      

  