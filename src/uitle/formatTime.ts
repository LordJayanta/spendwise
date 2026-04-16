export const getSqliteTimestamp = (date: Date = new Date()) =>
  date.toISOString().replace("T", " ").split(".")[0];

export const formatDisplayDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const formatDisplayTime = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};
