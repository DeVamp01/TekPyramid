var nums1=[1,2,3,4,5];
var nums2=[6,7,8,9,10,11,12,13,14,15,16,17];
var var3 =[];
var findMedianSortedArrays = function(nums1, nums2,var3) {
    var3=[...nums1,...nums2];
    var3.sort;
    console.log(var3);
      if(var3.length%2!=0)return Number(var3[Math.trunc(var3.length/2)]);
    else
    return Number((var3[var3.length/2]+var3[(var3.length/2)-1])/2)
};
console.log(findMedianSortedArrays(nums1,nums2,var3));

