/* Write a function called `isValidIPv4` that takes a string as input and returns `true` if the input is a valid IPv4 address in dot-decimal format, and `false` otherwise. An IPv4 address should consist of four octets, with values between 0 and 255, inclusive. */

const isValidIPv4 = (input: string): boolean => {
  const octlets = input.split(".");

  if (octlets.length != 4) return false;

  return octlets.every((octlet) => {
    const num = parseInt(octlet);
    return num >= 0 && num <= 255 && octlet === num.toString();
  });
};
