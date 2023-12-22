function hasTargetSum(array, target) {
  // Write your algorithm here
  let neededNumbers = new Set(); // to store the numbers needed to meet the target sum
  
  for (const number of array) {
    if (neededNumbers.has(number)) {
      // if current number is in the set, we found a pair
      return true;
    }
    neededNumbers.add(target - number); // add the number needed to meet the target
  }

  return false; // no pair found
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n). 
  This linear time complexity arises because the function iterates through the array exactly once. 
  During each iteration, it performs constant time operations, 
  such as checking for an element's presence in a set and adding an element to the set.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target)
    Initialize an empty set, neededNumbers

    Loop through each element (number) in array
        Check if number exists in neededNumbers
            If true, return true (found a pair that sums to target)
        
        Compute the difference (target - number) and add it to neededNumbers

    If no pair found, return false
end function

*/

/*
  Add written explanation of your solution here
  Imagine you're at a party, 
  and you're playing a game where you need to find a pair of guests whose ages add up to a specific number, 
  say 30. Now, you have a clever strategy to find this pair quickly without asking everyone.
  You start by holding an empty guest list (like our empty set in the code). 
  As you meet each guest, you think, "How old would someone else need to be so that their age plus this person's age equals 30?"
  For example,
  you meet someone who's 22 years old.
  You quickly calculate that you need to find someone who is 8 years old (30 - 22 = 8) to make the pair. 
  You add 8 to your guest list. 
  This list keeps track of the ages you need to find.
  As you continue, 
  whenever you meet a new guest, 
  you first check your list. If you meet someone whose age is already on your list, bingo! 
  You've found your pair.
  If their age isn't on the list, 
  you add the age of the person you need to find to pair with them to the list.
  If you get through the whole party without finding a match, 
  then no pair exists.
  This is essentially what the hasTargetSum function does with numbers in an array. 
  It keeps track of the numbers it needs to find a pair that adds up to the target. 
  It's efficient because you only have to go through the party (array) once, keeping track of potential matches as you go.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
