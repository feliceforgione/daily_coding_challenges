/* Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
       "ded"]
the output should be

addBorder(picture) = ["*****",
                  "*abc*",
                  "*ded*",
                  "*****"]

*/
function addBorder(picture: string[]): string[] {
  const pictureWidth = picture[0].length + 2;
  const pictureHorizontalBorder = new Array(pictureWidth).fill("*", 0).join("");

  const pictureWithBorder = picture.map((line) => `*${line}*`);
  pictureWithBorder.unshift(pictureHorizontalBorder);
  pictureWithBorder.push(pictureHorizontalBorder);

  return pictureWithBorder;
}
