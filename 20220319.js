// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let numIdeas = x.filter((w) => w == "good").length;
  if (numIdeas == 0) return "Fail!";
  if (numIdeas < 3) return "Publish!";
  return "I smell a series!";
}
