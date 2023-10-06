import Collapsible from "@/components/Collapsible";
import MCQ12 from "@/components/MultipleChoiceQuestions/12";
import MCQ2 from "@/components/MultipleChoiceQuestions/2";
import MCQ3 from "@/components/MultipleChoiceQuestions/3";
import MCQ4 from "@/components/MultipleChoiceQuestions/4";
import MCQ5 from "@/components/MultipleChoiceQuestions/5";

const Mcq = () => {
	const mcqList = [
		{
			question:
				"1. Which CSS property positions the content of a table’s caption on the specified side?",
			answer: `a. Caption-side`,
		},
		{
			question: <MCQ2 />,
			answer: `c. It selects the 2nd, 4th, 6th, 8th, etc. (even) <p> tags starting from 2.`,
		},
		{
			question: <MCQ3 />,
			answer: `c. Order: #div1, #div3, #div2, and #div4`,
		},
		{
			question: <MCQ4 />,
			answer: `c. .tabs {
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
		},
		{
			question: <MCQ5 />,
			answer: `c. <fieldset style="height: 100px; width: 100px">
			<legend>Coding is Fun</legend>
			</fieldset>`,
		},
		{
			question: `6. If you want to wrap a block of text around an image, which CSS property would you use?`,
			answer: `d. Float`,
		},
		{
			question: `7. The following HTML tags are used to display the data in tabular form. Which one is false?`,
			answer: `b. <th> - Defines a cell in a table.`,
		},
		{
			question: `8. Which of the following methods is/are invoked when there is an error during rendering in the
	React lifecycle?`,
			answer: `c. Both A and B.`,
		},
		{
			question: `9. Assuming options state values are given in the constructor, which code should wrap the
	components that are going to have access to the context inside a class component?`,
			answer: `a. <NotesContext.Provider value={this.state.notes}> //code
	</NotesContext.Provider>`,
		},

		{
			question: `10. Which of the following functions gets invoked after the render() function when \`state\` or \`props\` is
	updated?`,
			answer: `a. componentDidUpdate()`,
		},
		{
			question: `11. Which property is used to set the alignment of items inside the flexible container of CSS?`,
			answer: `d. align-items`,
		},
		{
			question: <MCQ12 />,
			answer: `b. Span`,
		},
	];

	return (
		<div style={{display: "flex", gap: "1rem", flexDirection: "column"}}>
			{mcqList.map((mcq, key) => (
				<Collapsible title={mcq.question} index={key} key={key}>
					{mcq.answer}
				</Collapsible>
			))}
		</div>
	);
};

export default Mcq;
