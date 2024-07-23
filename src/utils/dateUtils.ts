export const daysUntilTargetDate = (currentDate: Date, targetDate: Date): number => {
  const timeDiff = targetDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysRemaining;
};