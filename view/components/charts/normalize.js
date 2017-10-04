/**
 * Helper function for charts to normalize null values
 */
 function normalize(arr) {
   const result = []

   arr.forEach((d, i) => {
     d = Object.assign({}, d) // get rid of observer reference
     let val = d ? d.y : d

     if (!val) {
       const n = findNearestNeighbours(arr, i)
       val = (n[0] + n[1]) / 2
     }
     result.push(val)
   })
   return result
 }

 // Helper function to get nearest neighbour with actual value
 function findNearestNeighbours(arr, index) {
   const result = [null, null]
   let i = index
   let j = index

   // Left of index
   for (null; i >= 0; i--) {
     if (arr[i]) {
       result[0] = arr[i]
       break
     }
   }

   // Right of index
   for (null; j < arr.length; j++) {
     if (arr[j]) {
       result[1] = arr[j]
       break
     }
   }

   // If either side has no value, use either for both
   if (!result[0]) {
     result[0] = result[1]
   }
   if (!result[1]) {
     result[1] = result[0]
   }
   return result
 }

export default normalize
