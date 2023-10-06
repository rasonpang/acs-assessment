import type {ReactNode} from "react";
import styles from "./styles.module.css";

interface CollapsibleProps {
	title: ReactNode;
	index: number;
	children: ReactNode;
}

const Collapsible = (props: CollapsibleProps) => {
	const toggleId = "collapse_" + props.index;
	return (
		<div className={styles.container}>
			<label className={styles.title} htmlFor={toggleId}>
				<div>{props.title}</div>
			</label>
			<input id={toggleId} className={styles.collapse} type="checkbox" />
			<div className={styles.children}>{props.children}</div>
		</div>
	);
};

export default Collapsible;
