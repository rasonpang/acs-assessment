import Layout from '@/components/Layout';
import "@/app/globals.css";

const ACSAssessment = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default ACSAssessment;