'use strict';


// Create a function that takes two lists as a parameter
// and returns a list with the mutual elements from the lists.
// Write at least 3 different test cases.

// For example:
let a = [1, 1, 2, 3, 3, 4];
let b = [3, 4, 4, 5, 6];

function filterMutualElements(a,b){
	var mutualElement=[];
	a.forEach(function(element){
		b.forEach(function(value){
			if (element === value){
				mutualElement.push(value);
			}
		});
	});
	mutualElement =[...new Set(mutualElement)];
	return mutualElement;
}

function filterMutualElements_v2(a,b){
	mutualElement =
		a.filter(function(n) {
    		return b.indexOf(n) !== -1;
		});
	mutualElement =[...new Set(mutualElement)];
	return mutualElement;
}

console.log(filterMutualElements(a, b)); 
// Should print:
// [3,4]
