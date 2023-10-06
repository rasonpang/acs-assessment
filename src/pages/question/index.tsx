import Link from "next/link";
import styles from "./styles.module.css";

const Question = () => {
	const linkPrefix = "/question";

	return (
		<div className={styles.container}>
			<Link href={linkPrefix + "/1"}>Question 1</Link>
			<Link href={linkPrefix + "/2"}>Question 2</Link>
			<Link href={linkPrefix + "/3"}>Question 3</Link>
		</div>
	);
};

export default Question;
