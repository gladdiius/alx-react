import { List, Map } from 'immutable';

// Function to concatenate elements of two arrays into a List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge elements of two objects into a List
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  const mergedMap = map1.merge(map2);

  return List(mergedMap.toList());
}
