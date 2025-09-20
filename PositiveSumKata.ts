//You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

export function positiveSum(arr: number[]): number {
  const positiveValues: number[] = arr.filter((num) => {
    num >= 0;
  });

  return positiveValues.reduce((accumulator, num) => accumulator + num, 0);
}
