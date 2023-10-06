import Codebox from "@/components/Codebox";

const MCQ2 = () => {
	const code = `p:nth-child(2n+2) {\n\tcolor: #ccc;\n}`;

	return (
		<div>
			<div>2. What does this CSS code do?</div>
			<Codebox>{code}</Codebox>
		</div>
	);
};

export default MCQ2;
