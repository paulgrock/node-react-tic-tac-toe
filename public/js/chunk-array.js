export default (ary, amount) => {
	let chunkedAry = [];
	let idx = 0;
	while (idx < ary.length) {
		chunkedAry.push(ary.slice(idx, idx += amount));
	}
	return chunkedAry;
}
