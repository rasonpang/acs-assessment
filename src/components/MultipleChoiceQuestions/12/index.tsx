import Codebox from "@/components/Codebox";

const MCQ12 = () => {
	const code = `function Music() {
	return <span>Tiesto - Surrounded by Light</span>;
}

ReactDOM.render(<Music />, document.getElementById('root'));`;

	return (
		<div>
			<Codebox>{code}</Codebox>
			<div>12. What element type does this render?</div>
		</div>
	);
};

export default MCQ12;
