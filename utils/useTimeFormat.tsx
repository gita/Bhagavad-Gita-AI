const useTimeFormat = (date: string) => {
  const timeObj = new Date(date);
  const timeString = timeObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return timeString.toString();
};

export default useTimeFormat;
