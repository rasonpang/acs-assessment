import Link from "next/link";

const Question = () => {
	const linkPrefix = "/question";

	return (
		<div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
			<Link href={linkPrefix + "/1"}>Question 1</Link>
			<Link href={linkPrefix + "/2"}>Question 2</Link>
			<Link href={linkPrefix + "/3"}>Question 3</Link>
		</div>
	);
};

export default Question;
