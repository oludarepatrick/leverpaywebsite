import { useState } from 'react';

const RiskPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="container mx-auto p-4 bg-white text-blue-shade-20">
            <div className="container mx-auto p-8 bg-yellow shadow-lg rounded-lg border border-gray-200 relative before:content-[''] before:absolute before:inset-0 before:border before:border-blue-300 before:rounded-lg before:-z-10 before:opacity-50">
            
            <h1 className="font-primarySemiBold md:text-3xl text-2xl py-4 text-center">Leverpay’s Risk Assessment Policies</h1>
            <div className="space-y-4">
                {/* Introduction Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('introduction')}
                    >
                        Introduction
                    </h2>
                    {activeSection === 'introduction' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    The purpose of this risk assessment policy is to identify, assess, and manage 
                                    risks associated with operating a stablecoin-backed payment solution company.
                                </li>
                                <li>
                                    This policy aims to provide guidelines for conducting risk assessments, implementing 
                                    risk mitigation measures, and ensuring regulatory compliance.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Risk Identification Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('risk-identification')}
                    >
                        Risk Identification
                    </h2>
                    {activeSection === 'risk-identification' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    Leverpay regularly reviews and assesses the potential risks associated with 
                                    cryptocurrency market trends and stablecoin operations, including technological, 
                                    operational, financial, legal, and regulatory risks.
                                </li>
                                <li>
                                    Identify internal and external factors that could pose risks to the company, such 
                                    as cybersecurity threats, market volatility, regulatory changes, or fraudulent 
                                    activities.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Risk Assessment Process Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('risk-assessment-process')}
                    >
                        Risk Assessment Process
                    </h2>
                    {activeSection === 'risk-assessment-process' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    We have established a formal risk assessment process to evaluate the severity 
                                    and likelihood of identified risks.
                                </li>
                                <li>
                                    Responsibilities are assigned to qualified individuals (risk analysts) or teams 
                                    within our company to conduct risk assessments.
                                </li>
                                <li>
                                    We consider both quantitative and qualitative factors when assessing risks, 
                                    including historical data, industry best practices, expert opinions, and internal 
                                    analysis.
                                </li>
                                <li>
                                    Risks are rated based on their potential impact and likelihood of occurrence, 
                                    categorizing them into high, medium, or low risk levels.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Risk Mitigation Strategies Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('risk-mitigation-strategies')}
                    >
                        Risk Mitigation Strategies
                    </h2>
                    {activeSection === 'risk-mitigation-strategies' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <p>The following are our mitigation strategies:</p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Implement appropriate risk mitigation strategies based on the identified risks 
                                    and their severity.
                                </li>
                                <li>
                                    Establish controls and safeguards to mitigate operational risks, including 
                                    robust internal processes, secure technology infrastructure, and disaster recovery 
                                    plans.
                                </li>
                                <li>
                                    Implement effective cybersecurity measures to protect against hacking, data 
                                    breaches, and unauthorized access.
                                </li>
                                <li>
                                    Ensure compliance with relevant regulations and industry standards to mitigate 
                                    legal and regulatory risks.
                                </li>
                                <li>
                                    Remit payment to merchants in a timely manner (within a 24-hour window) to reduce 
                                    exposure to market volatility.
                                </li>
                                <li>
                                    Establish clear policies and procedures for customer onboarding, identity verification, 
                                    and fraud prevention.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Risk Monitoring and Reporting Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('risk-monitoring-reporting')}
                    >
                        Risk Monitoring and Reporting
                    </h2>
                    {activeSection === 'risk-monitoring-reporting' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <p>The following are our monitoring and reporting strategies:</p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Continuously monitor and review risks, regularly updating risk assessments as new 
                                    risks emerge or existing risks change.
                                </li>
                                <li>
                                    Establish mechanisms for ongoing risk reporting to senior management, including 
                                    regular risk status updates, trend analysis, and key risk indicators.
                                </li>
                                <li>
                                    Foster a culture of risk awareness and reporting among employees, encouraging them 
                                    to report any potential risks or vulnerabilities they identify.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Regulatory Compliance Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('regulatory-compliance')}
                    >
                        Regulatory Compliance
                    </h2>
                    {activeSection === 'regulatory-compliance' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    Stay informed about changes in cryptocurrency regulations and ensure compliance 
                                    with applicable laws and regulations in all jurisdictions where we operate.
                                </li>
                                <li>
                                    Designate a compliance officer responsible for monitoring and ensuring adherence 
                                    to regulatory requirements.
                                </li>
                                <li>
                                    Keep updated by working with government security agencies to stay informed on the 
                                    latest threats and industry trends.
                                </li>
                                <li>
                                    Implement robust know-your-customer (KYC) and anti-money laundering (AML) procedures 
                                    to prevent illicit activities and comply with regulatory obligations.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Business Continuity and Disaster Recovery Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('business-continuity-disaster-recovery')}
                    >
                        Business Continuity and Disaster Recovery
                    </h2>
                    {activeSection === 'business-continuity-disaster-recovery' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    Develop and maintain a comprehensive business continuity plan that outlines 
                                    procedures for mitigating risks and recovering operations in the event of 
                                    disruptions or disasters.
                                </li>
                                <li>
                                    Regularly test and update the business continuity plan to ensure its effectiveness.
                                </li>
                                <li>
                                    Establish backup and recovery mechanisms for critical data and infrastructure 
                                    to minimize the impact of potential disruptions.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Training and Awareness Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('training-awareness')}
                    >
                        Training and Awareness
                    </h2>
                    {activeSection === 'training-awareness' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    We provide regular training and awareness programs to educate employees about 
                                    potential risks associated with cryptocurrency operations and the company’s risk 
                                    management policies and procedures.
                                </li>
                                <li>
                                    Foster a risk-aware culture where our employees understand their roles and 
                                    responsibilities in identifying, reporting, and mitigating risks.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Regular Review and Update Section */}
                <div className="border-b border-gray-300">
                    <h2
                        className="font-primarySemiBold md:text-2xl text-xl py-2 cursor-pointer hover:text-blue-600"
                        onClick={() => toggleSection('regular-review-update')}
                    >
                        Regular Review and Update
                    </h2>
                    {activeSection === 'regular-review-update' && (
                        <div className="text-justify pb-4 leading-loose font-primaryRegular">
                            <ul className="list-disc pl-6">
                                <li>
                                    We conduct periodic reviews of the risk assessment policies to incorporate 
                                    changes in the business environment, emerging risks, or regulatory requirements.
                                </li>
                                <li>
                                    Engage external experts or consultants, if necessary, to ensure the risk 
                                    assessment policies remain effective and up to date.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default RiskPolicy;
