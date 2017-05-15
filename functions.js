
/* @flow */

function choose(items: Array<string>, n: number, modifier: (i: number) => number ): number {
	return 3;
}

// choose([1], 10, (i) => "Taste");
// choose(["Faucet"], 10, (i) => "Taste");
choose(["Faucet"], 10, (i) => i + 1);