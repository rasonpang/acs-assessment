const Mcq = () => {
	const answerList = [
		`a. Caption-side`,
		`c. It selects the 2nd, 4th, 6th, 8th, etc. (even) <p> tags starting from 2.`,
		`c. Order: #div1, #div3, #div2, and #div4`,
		`c. .tabs {
			background-color: lightgreen;
			color: white;
			border: none;
			padding: 20px;
			text-align: center;
			font-size: 16px;
			}
			.tabs:hover {
			background-color: green;
			}`,
		`c. <fieldset style="height: 100px; width: 100px">
			<legend>Coding is Fun</legend>
			</fieldset>`,
		`d. Float`,
		`b. <th> - Defines a cell in a table.`,
		`c. Both A and B.`,
		`a. <NotesContext.Provider value={this.state.notes}> //code
		</NotesContext.Provider>`,
		`a. componentDidUpdate()`,
		`d. align-items`,
		`b. Span`,
	];

	return (
		<div>
			<ol>
				{answerList.map((i: string, key: number) => (
					<li key={key}>{i}</li>
				))}
			</ol>
		</div>
	);
};

export default Mcq;
