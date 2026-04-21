export default function randomDay() {
  const arrayDay = ["", "15 phút trước", "1 tháng trước", "1 năm trước"];

  return arrayDay[Math.floor(Math.random() * 2 + 1)];
}
