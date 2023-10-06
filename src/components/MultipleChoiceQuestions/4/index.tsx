import Codebox from "@/components/Codebox";
import Image from "next/image";

const MCQ4 = () => {
	const code = `<button class="tabs">Domains</button>
<button class="tabs">Contests</button>
<button class="tabs">Progress</button>
<button class="tabs">Leader Board</button>
<button class="tabs">Jobs</button>`;

	return (
		<div>
			<Image src={"/mcq4.png"} width={900} height={333} alt="mcq4.png" />
			<Codebox>{code}</Codebox>
			<div>4. Which CSS styling produces the buttons as shown?</div>
		</div>
	);
};

export default MCQ4;
