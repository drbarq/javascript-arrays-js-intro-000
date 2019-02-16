var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ... array];
  return array;
}

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
