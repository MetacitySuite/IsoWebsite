import { Section } from './Containers';
import { Footer, TryNow } from './Footer';
import { Header } from './Header';
import { HowItWorksTitle, Step1Panel, Step2Panel } from './HowItWorks';
import { IntroUses, IntroWelcome } from './Intro';
import { UseCases } from './UseCases';

import './sentient.css';

export function Studio() {
    return (
        <div className="darkbg">
            <Section>
                <Header />
                <IntroWelcome />
                <IntroUses />
            </Section>
            <Section className="bg-white text-black rounded-t-3xl">
                <HowItWorksTitle />
                <Step1Panel />
                <Step2Panel />
                <UseCases />
            </Section>
            <Section>
                <TryNow />
                <Footer />
            </Section>
        </div>
    );
}
