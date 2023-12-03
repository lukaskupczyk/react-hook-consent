import Layout from '@theme/Layout';
import 'react-hook-consent/dist/styles/style.css';
import { HomepageDemo } from '../components/homepage/Demo';
import { HomepageHero } from '../components/homepage/Hero';
import { HomepageFeatures } from '../components/homepage/features';

export default function Homepage() {
    return (
        <Layout title={`Welcome`} description="React Consent Management solution.">
            <HomepageHero />
            <main>
                <HomepageFeatures />
            </main>
            <HomepageDemo />
        </Layout>
    );
}
