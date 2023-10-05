import {ChangeEvent, useState} from "react";
import styles from "./styles.module.css";

const Calculator = () => {
	const [primaryInput, setPrimaryInput] = useState("0");
	const [secondaryInput, setSecondaryInput] = useState("0");
	const [total, setTotal] = useState("0");

	const onInputChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
		const newValue: string = e.target.value;
		if (index == 0) setPrimaryInput(newValue);
		else if (index == 1) setSecondaryInput(newValue);
	};

	const onSumBtnClick = () => {
		const newTotal = Number(primaryInput) + Number(secondaryInput);
		setTotal(String(newTotal));
	};

	return (
		<div className={styles.container}>
			<input
				type="number"
				onChange={(e) => onInputChange(0, e)}
				value={primaryInput}
			/>
			<input
				type="number"
				onChange={(e) => onInputChange(1, e)}
				value={secondaryInput}
			/>
			<button onClick={onSumBtnClick}>Add Two Numbers</button>
			<div>Total: {total}</div>
		</div>
	);
};

export default Calculator;
