import { matchPlaylists } from "./matchPlaylists";

const popPlaylist = ["2", "1", "6", "5", "3", "4"];
const rockPlaylist = ["4", "3", "6", "5", "2", "1"];
const pagodePlaylist = ["6", "5", "2", "3", "4", "1"];

export function countingInversions(musicsOrdered) {
  let arrayData = [];

  musicsOrdered.forEach((musics) => {
    arrayData.push(musics.id);
  });

  let popInversions = Math.abs(mergeSortAndCount(popPlaylist, 0, 5) - mergeSortAndCount([...arrayData], 0, 5));

  let rockInversions = Math.abs(mergeSortAndCount(rockPlaylist, 0, 5) - mergeSortAndCount([...arrayData], 0, 5));

  let pagodeInversions = Math.abs(mergeSortAndCount(pagodePlaylist, 0, 5) - mergeSortAndCount([...arrayData], 0, 5));

  return matchPlaylists(popInversions, rockInversions, pagodeInversions);
}

function mergeAndCount(array, first, m, last) {
  let left = [];

  for (let i = first; i < m + 1; i++) {
    left.push(array[i]);
  }

  let right = [];

  for (let i = m + 1; i < last + 1; i++) {
    right.push(array[i]);
  }

  let i = 0, j = 0, k = first, swaps = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k++] = left[i++];
    } else {
      array[k++] = right[j++];
      swaps += m + 1 - (first + i);
    }
  }
  while (i < left.length) {
    array[k++] = left[i++];
  }

  while (j < right.length) {
    array[k++] = right[j++];
  }
  return swaps;
}

function mergeSortAndCount(array, first, last) {
  let count = 0;

  if (first < last) {
    let m = Math.floor((first + last) / 2);

    count += mergeSortAndCount(array, first, m);

    count += mergeSortAndCount(array, m + 1, last);

    count += mergeAndCount(array, first, m, last);
  }
  return count;
}
