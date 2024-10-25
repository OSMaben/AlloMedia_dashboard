export default function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const isToday = today.toDateString() === date.toDateString();

  const formattedHours = hours % 12 || 12; 
  const ampm = hours >= 12 ? "PM" : "AM";

  return isToday
    ? `Today at ${formattedHours}:${minutes} ${ampm}`
    : `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
}

// const formattedDate = formatDate("2024-10-24T10:31:49.191Z");
// console.log(formattedDate); 
