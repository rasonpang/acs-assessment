import Calculator from "@/components/Calculator";

const Question1 = () => {
	return (
		<div>
			<pre>
				Challenge 1: Create a React page that works like a calculator
				that can add two numbers. Functionality: When user place numbers
				on first and second input and hit the button. The sum should
				appear on the `Total: ` as an output.
			</pre>
			<hr />
			<h1>Adding Two Numbers</h1>
			<Calculator />
		</div>
	);
};

export default Question1;
