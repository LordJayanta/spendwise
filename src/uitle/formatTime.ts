export const formatTime = (timeString: string) => {
  return new Date(`1970-01-01T${timeString}Z`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};
