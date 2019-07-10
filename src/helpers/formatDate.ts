const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * @param {Date} date
 * @return string
 */
export default function formatDate(date: Date): string {
  // 12 May 2014
  return date.getDate() +' '+ months[date.getMonth()] +' '+ date.getFullYear()
}
