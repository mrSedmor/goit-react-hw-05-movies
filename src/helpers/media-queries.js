export { device } from './device-size';

export const mq = (min, max) => {
  const conditions = ['@media screen'];
  if (min) {
    conditions.push(`(min-width: ${min}px)`);
  }
  if (max) {
    conditions.push(`(max-width: ${max - 0.1}px)`);
  }

  return conditions.join(' and ');
};
