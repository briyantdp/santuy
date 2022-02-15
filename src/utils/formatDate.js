const formatDate = (d) => {
  const date = new Date(d);
  const dateFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: mo }, , { value: da }] = dateFormat.formatToParts(date);
  return `${da} ${mo}`;
};

export default formatDate;
