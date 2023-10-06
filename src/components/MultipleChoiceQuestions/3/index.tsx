import Codebox from "@/components/Codebox";

const MCQ3 = () => {
	const code = `<style>
	#mainDiv {
		display: flex;
	}
	#mainDiv div {
		width: 70px;
		height: 70px;
	}
	div#div1 {
		order: 2;
	}
	div#div2 {
		order: 4;
	}
	div#div3 {
		order: 3;
	}
	div#div4 {
		order: 1;
	}
	</style>
	<body>
		<div id="mainDiv">
			<div id="div1"></div>
			<div id="div2"></div>
			<div id="div3"></div>
			<div id="div4" style="order: 6"></div>
		</div>
	</body>`;

	return (
		<div>
			<div>
				3. Given the following snippet, choose the correct order of
				arrangement of all the divs in the view.
			</div>
			<Codebox>{code}</Codebox>
		</div>
	);
};

export default MCQ3;
