const dateAndTime = () => {

// Get the current date object in the local timezone
const localDate = new Date();

// Extract the hours, minutes, and seconds
const hours = localDate.getHours().toString().padStart(2, '0');
const minutes = localDate.getMinutes().toString().padStart(2, '0');
const seconds = localDate.getSeconds().toString().padStart(2, '0');

// Combine hours, minutes, and seconds to get the current time
const currentTime = `${hours}:${minutes}:${seconds}`;

// Get the current day (as a string, e.g., 'Monday')
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[localDate.getDay()];

console.log(currentTime); // Output the current time
console.log(currentDay);  // Output the current day

return { currentDay, currentTime}

}

export default dateAndTime
