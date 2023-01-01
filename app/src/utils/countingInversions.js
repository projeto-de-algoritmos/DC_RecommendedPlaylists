import { matchPlaylists } from "./matchPlaylists";

const popPlaylist = ["2", "1", "3", "5", "6", "4"]
const rockPlaylist = ["4", "3", "5", "6", "1", "2"]
const pagodePlaylist = ["6", "5", "2", "1", "3", "4"]

export function countingInversions(musicsOrdered){
    const arrayData = []
    musicsOrdered.forEach(musics => {
        arrayData.push(musics.id)
    });

    
    const popArray = arrayData.concat(popPlaylist)
    const popInversions = mergeSortAndCount(popArray, 0, popArray.length - 1)
    
    const rockArray = arrayData.concat(rockPlaylist)
    const rockInversions = mergeSortAndCount(rockArray, 0, rockArray.length - 1)
    
    const pagodeArray = arrayData.concat(pagodePlaylist)
    const pagodeInversions = mergeSortAndCount(pagodeArray, 0, pagodeArray.length - 1)

    return matchPlaylists(popInversions, rockInversions, pagodeInversions)
}

function mergeAndCount(array, first, m, last){    
    let left = [];
          
    for(let i = first; i < m + 1; i++){
        left.push(array[i]); 
    }
          
    let right = [];
  
    for(let i = m + 1; i < last + 1; i++){
        right.push(array[i]);
    }
          
    let i = 0, j = 0, k = first, swaps = 0;
    while (i < left.length && 
           j < right.length){
        if (left[i] <= right[j])
        {
            array[k++] = left[i++];
        }
        else
        {
            array[k++] = right[j++];
            swaps += (m + 1) - (first + i);
        }
    }
    while (i < left.length){
        array[k++] = left[i++];
    }
          
    while (j < right.length){
        array[k++] = right[j++];
    }
    return swaps;
}
      
function mergeSortAndCount(array, first, last)
{        
    let count = 0;
      
    if (first < last){
        let m = Math.floor((first + last) / 2);
              
         count += mergeSortAndCount(array, first, m);
              
         count += mergeSortAndCount(array, m + 1, last);
              
         count += mergeAndCount(array, first, m, last);
    }
    return count;
}