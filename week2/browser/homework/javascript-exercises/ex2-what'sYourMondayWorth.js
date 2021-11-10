const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];
  
  const hourlyRate = 25;
  
  function computeEarnings(tasks,rate) {
    const total = tasks.map(tasks => (tasks.duration * rate) /60)
    .reduce((a, b) => a + b, 0); 
  
    return `€${total.toFixed(2)}`;
  };
  
  
  const earnings = computeEarnings(mondayTasks, hourlyRate);
  console.log(`Total earnings: ${earnings}`);
  