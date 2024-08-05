import { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="bg-blue-500 py-12 min-h-screen flex items-center justify-center">
           <div className="container mx-auto p-8 bg-blue shadow-lg rounded-lg border border-gray-200 relative before:content-[''] before:absolute before:inset-0 before:border before:border-blue-300 before:rounded-lg before:-z-10 before:opacity-50">
                <h1 className="font-primarySemiBold md:text-3xl text-2xl py-4 text-center">Privacy Policy</h1>

                <div className="space-y-4">
                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('overview')}
                        >
                            Overview
                        </h2>
                        {activeSection === 'overview' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <p>
                                    The LeverPay Privacy Policy explains your privacy entitlements concerning the collection,
                                    utilization, storage, sharing, and safeguarding of your data throughout our website, 
                                    APIs, applications, email notifications, and tools, regardless of your method or means 
                                    of accessing or using them.
                                </p>
                                <p>
                                    In this policy, when referring to {`"we," "us," or "our,"`} we are describing the entity 
                                    responsible for your information. For individuals residing in Nigeria, the data controller 
                                    responsible for your information is Leverchain Technology Limited, located at 4, Michael 
                                    Whemu Crescent, Agbado Ijaye, Lagos, Nigeria.
                                </p>
                                <p>
                                    However, it&apos;s important to note that you maintain full control and responsibility for 
                                    all information you provide to us when using our services, as outlined in our Terms of 
                                    Service.
                                </p>
                                <p>
                                    Regardless of your place of residence, by utilizing any of our services, you are granting 
                                    consent for the collection, transfer, storage, disclosure, and usage of your information 
                                    in Nigeria and any other country in which we operate, as detailed in this privacy policy. 
                                    This encompasses any sensitive information you choose to share, as defined by applicable law.
                                </p>
                                <p>
                                    We hold a strong commitment to preserving the privacy of both our online visitors and 
                                    registered users, and we will take reasonable measures to safeguard your information. 
                                    Our approach is to uphold your privacy in all instances where we collect data while 
                                    operating our website.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('handling')}
                        >
                            How We Handle Collected Information
                        </h2>
                        {activeSection === 'handling' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <strong>Personal Information</strong>
                                <p>
                                    Upon your registration, we gather personal information that you willingly furnish 
                                    through lawful means. The collection and utilization of personal information are 
                                    exclusively directed toward fulfilling the purposes explicitly defined by us, as well 
                                    as for supplementary objectives.
                                </p>
                                <p>
                                    This encompasses the personal details you furnish during registration, such as your 
                                    email address, company name, password, bank account number, and potentially anonymous 
                                    data linked to you, such as your IP address. This information must be pertinent to its 
                                    intended purposes, and to the extent required for those purposes, it should remain accurate, 
                                    comprehensive, and current:
                                </p>
                                <ul className="list-disc pl-4 leading-loose font-primaryRegular pb-2">
                                    <li>To provide you with access to our services.</li>
                                    <li>To validate the information you&apos;ve provided.</li>
                                    <li>To deter, uncover, and manage any unlawful or fraudulent activities.</li>
                                    <li>To enhance the quality of our services for your benefit.</li>
                                    <li>To keep our website structure, database, and content up to date.</li>
                                    <li>To tailor advertisements, newsletters, and service updates.</li>
                                    <li>To resolve any disputes that may arise.</li>
                                </ul>
                                <p>
                                    Furthermore, additional personal information may be acquired from third-party applications 
                                    and other identification or verification services, such as your financial institution. 
                                    Once you commence using our services, we maintain records of your transactions, and your 
                                    personal information will not be shared or disclosed to third parties without your explicit 
                                    consent.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('visitors')}
                        >
                            Visitors to Our Website
                        </h2>
                        {activeSection === 'visitors' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <p>
                                    We do not gather data from website visitors. Nevertheless, we may collect non-personally 
                                    identifiable information for the purpose of customizing advertisements, monitoring, and 
                                    enhancing our website and services. Rest assured, this information will not be shared or 
                                    disclosed to third parties unless we have obtained your consent.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('safeguarding')}
                        >
                            Safeguarding Your Information
                        </h2>
                        {activeSection === 'safeguarding' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <p>
                                    Your personal information is safeguarded through comprehensive global security measures 
                                    designed to mitigate the risks of loss, theft, unauthorized access, disclosure, copying, 
                                    misuse, or alterations.
                                </p>
                                <p>
                                    Additional security protocols, including but not limited to firewalls, data encryption, 
                                    and access permissions limited to employees for the sole purpose of fulfilling their job 
                                    responsibilities, are in place.
                                </p>
                                <p>
                                    Our commitment is unwavering in conducting our business in alignment with these principles, 
                                    ensuring the preservation and protection of the confidentiality of personal information.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('cookies')}
                        >
                            Cookies
                        </h2>
                        {activeSection === 'cookies' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <p>
                                    Similar to many other websites, we may employ cookies to recognize you as a user and 
                                    enhance the customization and quality of our services. A cookie, a small data file, 
                                    is transmitted to your computer or mobile device. This facilitates the retention of 
                                    your account login details, IP addresses, web traffic, visit frequency, and visit 
                                    timestamps.
                                </p>
                                <p>
                                    While certain browsers may automatically accept cookies, some can be configured to 
                                    decline cookies or issue alerts when a website seeks to place a cookie on your computer.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('data-storage')}
                        >
                            Data Storage
                        </h2>
                        {activeSection === 'data-storage' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular">
                                <p>
                                    Personal information will be maintained on our servers solely for the duration of an 
                                    active account. Subsequently, when an account is deactivated, your data will be retained 
                                    on our servers only for as long as legally required.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-gray-300">
                        <h2
                            className="font-primarySemiBold md:text-2xl text-xl py-4 cursor-pointer hover:text-blue-600"
                            onClick={() => toggleSection('review-update')}
                        >
                            Regular Review and Update
                        </h2>
                        {activeSection === 'review-update' && (
                            <div className="text-justify pb-4 leading-7 font-primaryRegular italic">
                                <p>
                                    Please note that this policy may be subject to periodic revisions at our sole discretion, 
                                    in order to remain in compliance with regulatory changes.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
