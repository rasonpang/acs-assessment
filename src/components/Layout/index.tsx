import type {ReactNode} from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Layout = ({children}: {children: ReactNode}) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.navigate_wrapper}>
					<Link href={"/mcq"}>MCQ</Link>
					<Link href={"/question"}>Question</Link>
				</div>
			</div>
			<div className={styles.children}>{children}</div>
		</div>
	);
};

export default Layout;
