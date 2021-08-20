let isActive = false
console.log(isActive);

isActive = true
console.log(isActive);

isActive = 1
console.log(!!isActive);
console.log(!isActive);

console.log('true values...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('false values....');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('more ...');
console.log(!!('' || null || 0 || ' '));

let name = 'lucas'
console.log(name || 'Anonymous');