import { Map } from 'immutable';

// Function to merge two objects deeply
export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Recursively merge the two maps
  const mergedMap = map1.mergeWith((oldVal, newVal) => {
    if (Map.isMap(oldVal)) {
      return oldVal.mergeWith((oldNestedVal, newNestedVal) => oldNestedVal.concat(newNestedVal),
        newVal);
    }
    return newVal;
  }, map2);

  return mergedMap;
}
