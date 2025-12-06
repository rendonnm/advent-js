type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  function parseElfDateTime(dateTime: ElfDateTime) {
    const [date, time] = dateTime.split("@");
    const [year, month, day] = date.split("*");
    const [hour, minutes, secondsText] = time.split("|");

    const [seconds, _] = secondsText.split(" ");
    return Date.UTC(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minutes),
      Number(seconds)
    );
  }

  const fromDate = parseElfDateTime(fromTime);
  const takeOffDate = parseElfDateTime(takeOffTime);

  return Math.floor(takeOffDate - fromDate) / 1000;
}
