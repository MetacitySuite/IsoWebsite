import { Section } from './Containers';
import { Footer, TryNow } from './Footer';
import { Header } from './Header';
import { HowItWorksTitle, Step1Panel, Step2Panel } from './HowItWorks';
import { IntroUses, IntroWelcome } from './Intro';
import { UseCases } from './UseCases';

export function Studio() {
    return (
        <>
            <Section className="bg-neutral-900 text-white">
                <Header />
                <IntroWelcome />
                <IntroUses />
            </Section>
            <Section>
                <HowItWorksTitle />
                <Step1Panel />
                <Step2Panel />
                <UseCases />
            </Section>
            <Section>
                <TryNow />
                <Footer />
            </Section>
        </>
    );
}
