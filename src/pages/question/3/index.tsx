import styles from "./styles.module.css";

const Question3 = () => {
	type ParamList = {numbers: number[]; target: number}[];
	const paramList: ParamList = [
		{numbers: [4, 11, 17, 25], target: 21},
		{numbers: [0, 1, 2, 2, 3, 5], target: 4},
		{numbers: [-1, 0], target: -1},
	];

	/*
		@param {number[]} numbers
		@param {number} target
		@return {number[]}
	*/

	function twoSum(numbers: number[], target: number): number[] {
		// your code here
		const additionalIndex = 1;
		let left = 0;
		let right = numbers.length - 1;

		while (left < right) {
			const sum = numbers[left] + numbers[right];
			if (sum == target) {
				return [left + additionalIndex, right + additionalIndex];
			} else if (sum < target) {
				left++;
			} else {
				right--;
			}
		}

		return [];
	}

	return (
		<div>
			{paramList.map((param, key) => (
				<div key={key}>
					<div>
						Input: Numbers = {JSON.stringify(param.numbers)}, Target
						= {param.target}
					</div>
					<div>
						Output:{" "}
						{JSON.stringify(twoSum(param.numbers, param.target))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Question3;
