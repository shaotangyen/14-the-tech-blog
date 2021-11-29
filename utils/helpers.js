module.exports = {
    format_date: (date) => {
      // Format date as HH:MM:SS AM/PM MM/DD/YYYY
      return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    },
  };
  