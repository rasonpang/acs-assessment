import {useRouter} from "next/router";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import Link from "next/link";

const Breadcrumb = () => {
	const router = useRouter();
	const [routeList, setRouteList] = useState([{title: "Home", href: "/"}]);

	useEffect(() => {
		let pathAccumulator = "";

		const newRouteList = router.pathname.split("/").map((path, index) => {
			if (path == "" && index == 0) {
				pathAccumulator += "/";
				return {title: "Home", href: "/"};
			} else {
				let newPathTitle =
					path.charAt(0).toUpperCase() + path.substring(1);
				pathAccumulator += path + "/";
				return {title: newPathTitle, href: pathAccumulator};
			}
		});

		setRouteList(newRouteList);
	}, [router]);

	return (
		<span className={styles.container}>
			{routeList.map((route, index) => {
				if (index == 0)
					return <Link href={route.href}>{route.title}</Link>;
				else
					return (
						<>
							<span className={styles.divider}>{"/"}</span>
							<Link href={route.href}>{route.title}</Link>
						</>
					);
			})}
		</span>
	);
};

export default Breadcrumb;
