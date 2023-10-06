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
			<pre>{`Challenge 3: Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number. Let these two numbers be
numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array
[index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same
element twice.
Your solution must use only constant extra space.
You can use Javascript or Typescript. Please provide your answer as sample structure below.`}</pre>
			<hr />
			<div className={styles.container}>
				{paramList.map((param, key) => (
					<div className={styles.sample} key={key}>
						<div>
							Input: Numbers = {JSON.stringify(param.numbers)},
							Target = {param.target}
						</div>
						<div>
							Output:{" "}
							{JSON.stringify(
								twoSum(param.numbers, param.target)
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Question3;
