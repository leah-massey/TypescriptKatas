// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
export class Kata {
  static highAndLow(numbers: string): string {
    const sortedNumbers: number[] = numbers
      .split(" ")
      .map((num) => parseInt(num))
      .sort((a, b) => a - b);

    const highest: number = sortedNumbers[sortedNumbers.length - 1];
    const lowest: number = sortedNumbers[0];

    return `${highest} ${lowest}`;
  }
}
