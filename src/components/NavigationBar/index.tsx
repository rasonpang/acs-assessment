import Link from "next/link";
import styles from "./styles.module.css";
import {useState} from "react";
import Image from "next/image";

const NavigationBar = () => {
	const currentHref: string = "/question/2";

	const [navList, setNavList] = useState([
		"Showcase",
		"Docs",
		"Blog",
		"Analytics",
		"Templates",
		"Enterprise",
	]);

	return (
		<nav className={styles.container}>
			<div className={styles.logo_wrapper}>
				<Link className={styles.logo} href={currentHref}>
					AEON
				</Link>
			</div>

			<div className={styles.nav_list_wrapper}>
				{navList.map((nav: string, key: number) => (
					<a href={currentHref} key={key}>
						{nav}
					</a>
				))}
			</div>

			<div className={styles.search_wrapper}>
				<div>
					<input id={styles.search_toggle} type="checkbox" />
					<input
						id={styles.search}
						placeholder="Search documentation..."
					/>
				</div>

				<div className={styles.search_icons}>
					<label htmlFor={styles.search_toggle}>
						<Image
							className={styles.icon}
							width={20}
							height={20}
							src={"/search.svg"}
							alt="search.svg"
						/>
					</label>
					<label>
						<Image
							className={styles.icon}
							width={20}
							height={20}
							src={"/xmark.svg"}
							alt="cancel.svg"
						/>
					</label>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
