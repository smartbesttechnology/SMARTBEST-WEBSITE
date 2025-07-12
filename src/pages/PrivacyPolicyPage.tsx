import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                <p className="text-blue-800 font-medium">
                  SmartBest Technology is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Contact us through our website contact forms</li>
                  <li>Request consultations or demos of our services</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Engage with our customer support team</li>
                  <li>Participate in surveys or feedback sessions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Business Information</h3>
                <p className="text-gray-700 mb-4">
                  For our AI business automation and development services, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Company name and business details</li>
                  <li>Industry and business requirements</li>
                  <li>Technical specifications and project requirements</li>
                  <li>Communication preferences and contact information</li>
                  <li>Project timelines and budget information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Technical Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Website usage patterns and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Referral sources and marketing campaign data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Service Delivery</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide AI business automation solutions and custom development services</li>
                  <li>Develop and deploy mobile applications, web applications, and Telegram bots</li>
                  <li>Implement lead generation and sales automation systems</li>
                  <li>Deliver technical support and maintenance services</li>
                  <li>Process payments and manage billing for our services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Communication and Support</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send project updates and service notifications</li>
                  <li>Provide technical documentation and training materials</li>
                  <li>Conduct follow-up communications regarding our services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Business Operations</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Improve our services and develop new offerings</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Conduct market research and business analytics</li>
                  <li>Ensure security and prevent fraudulent activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Third-Party Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We may share your information with trusted third-party service providers who assist us in:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cloud hosting and data storage services</li>
                  <li>Payment processing and billing systems</li>
                  <li>Email marketing and communication platforms</li>
                  <li>Analytics and performance monitoring tools</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Business Transfers</h3>
                <p className="text-gray-700 mb-4">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to appropriate confidentiality protections.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information when required by law, court order, or government regulation, or to protect our rights, property, or safety.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security and Protection</h2>
                <p className="text-gray-700 mb-4">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>SSL/TLS encryption for all data transmissions</li>
                  <li>Secure cloud storage with access controls and monitoring</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Multi-factor authentication for system access</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Active Projects:</strong> Throughout the duration of our business relationship</li>
                  <li><strong>Customer Support:</strong> Up to 3 years after last interaction for support purposes</li>
                  <li><strong>Marketing Communications:</strong> Until you unsubscribe or request removal</li>
                  <li><strong>Legal Requirements:</strong> As required by applicable laws and regulations</li>
                  <li><strong>Financial Records:</strong> 7 years for tax and accounting purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Access and Control</h3>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to certain processing activities</li>
                  <li>Request data portability in a structured format</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Marketing Preferences</h3>
                <p className="text-gray-700 mb-4">
                  You can opt-out of marketing communications at any time by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Clicking the unsubscribe link in our emails</li>
                  <li>Contacting us directly at info@smartbesttechnology.com</li>
                  <li>Updating your preferences in your account settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your website experience:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
                  <li><strong>Marketing Cookies:</strong> Enable personalized content and advertising</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  SmartBest Technology operates globally with offices in Nigeria and the United States. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Compliance with applicable data protection laws</li>
                  <li>Standard contractual clauses for data transfers</li>
                  <li>Adequacy decisions where available</li>
                  <li>Additional security measures for cross-border data flows</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Nigeria Office</h4>
                      <p className="text-gray-700"><strong>Email:</strong> info@smartbesttechnology.com</p>
                      <p className="text-gray-700"><strong>Phone:</strong> +234 812 109 6818</p>
                      <p className="text-gray-700"><strong>Address:</strong> 7B UDECO MEDICAL ROAD CHEVY VIEW ESTATE, CHEVRON DRIVE, LAGOS, NIGERIA</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">USA Office</h4>
                      <p className="text-gray-700"><strong>Phone:</strong> +1 (260) 234-0752</p>
                      <p className="text-gray-700"><strong>Address:</strong> 2908 LYNN AVE, FORT WAYNE, IN 46805, USA</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700"><strong>Data Protection Officer:</strong> privacy@smartbesttechnology.com</p>
                    <p className="text-gray-700"><strong>General Inquiries:</strong> info@smartbesttechnology.com</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We will post the updated policy on our website</li>
                  <li>We will update the "Effective Date" at the top of this policy</li>
                  <li>For material changes, we will notify you via email</li>
                  <li>We will maintain previous versions for your reference</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
