export function getDuration(date: string) {
  let duration = (new Date().getTime() - new Date(date).getTime()) / 1000;
  let suffix = "s";

  if (duration > 60) {
    duration = duration / 60;
    suffix = "m";
  }
  if (duration > 60) {
    duration = duration / 60;
    suffix = "h";
  }
  return Math.floor(duration) + suffix;
}
