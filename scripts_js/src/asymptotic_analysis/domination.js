/**
 * === Domination Rule
 */

function complexFunction(arr) {
	const x = binarySearch(arr, target);

	arr.sort();

	for (const x of arr) {
		doSomething(x);
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			process(i, j);
		}
	}

	for (const a of arr) {
		for (const b of arr) {
			check(a, b);
		}
	}

	for (const i of arr) {
		for (const j of arr) {
			for (const k of arr) {
				process(i, j, k);
			}
		}
	}
}
