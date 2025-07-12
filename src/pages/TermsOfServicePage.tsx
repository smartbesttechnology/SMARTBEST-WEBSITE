import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                <p className="text-blue-800 font-medium">
                  These Terms of Service govern your use of SmartBest Technology's AI business automation and development services. Please read these terms carefully before using our services.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using SmartBest Technology's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-gray-700 mb-4">
                  These terms apply to all users, customers, and visitors of our services, including our website, mobile applications, AI automation solutions, and development services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 AI Business Automation Solutions</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>AI Chat Agents for websites, mobile apps, and messaging platforms</li>
                  <li>Voice AI Assistants for call handling and customer service</li>
                  <li>Automated lead generation and qualification systems</li>
                  <li>Customer relationship management (CRM) automation</li>
                  <li>Sales process automation and optimization</li>
                  <li>Custom AI solutions tailored to specific business needs</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Development Services</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Custom mobile application development (iOS and Android)</li>
                  <li>Web application development and design</li>
                  <li>Telegram bot development and integration</li>
                  <li>E-commerce platform setup and customization</li>
                  <li>API development and third-party integrations</li>
                  <li>Database design and management systems</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Consulting and Support Services</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Technology consulting and strategy development</li>
                  <li>Digital transformation planning and implementation</li>
                  <li>Technical support and maintenance services</li>
                  <li>Training and documentation for implemented solutions</li>
                  <li>Performance monitoring and optimization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities and Acceptable Use</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Responsibilities</h3>
                <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete information during registration and use</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights of SmartBest Technology and third parties</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Prohibited Activities</h3>
                <p className="text-gray-700 mb-4">You may not use our services to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Engage in any illegal, harmful, or fraudulent activities</li>
                  <li>Transmit malware, viruses, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the operation of our services</li>
                  <li>Violate the privacy or rights of other users</li>
                  <li>Use our services for spam or unsolicited communications</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms and Billing</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Pricing and Payment</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Pricing for our services is as quoted in your service agreement</li>
                  <li>Payments are due according to the agreed payment schedule</li>
                  <li>We accept various payment methods including bank transfers and online payments</li>
                  <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
                  <li>Currency and payment terms will be specified in your service agreement</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Late Payments and Suspension</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Late payment fees may apply for overdue invoices</li>
                  <li>Services may be suspended for accounts with overdue payments</li>
                  <li>We reserve the right to terminate services for non-payment</li>
                  <li>Reactivation fees may apply for suspended services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Refunds and Cancellations</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Refund policies vary by service type and will be specified in your agreement</li>
                  <li>Development projects: Refunds based on completed milestones</li>
                  <li>Subscription services: Pro-rated refunds may be available</li>
                  <li>Custom solutions: Refunds subject to project-specific terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 SmartBest Technology IP</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All proprietary technology, software, and methodologies remain our property</li>
                  <li>AI models, algorithms, and custom solutions are licensed, not sold</li>
                  <li>Trademarks, logos, and brand materials are protected intellectual property</li>
                  <li>Documentation, training materials, and processes are proprietary</li>
                  <li>You receive a limited license to use our solutions for your business purposes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Customer Data and Content</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>You retain ownership of your business data and customer information</li>
                  <li>We obtain limited rights to process data for service delivery</li>
                  <li>Custom configurations and business rules remain your property</li>
                  <li>Data portability rights ensure you can export your information</li>
                  <li>We respect your intellectual property and confidential information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Level Agreements and Performance</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Service Availability</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We strive to maintain 99.5% uptime for our AI automation systems</li>
                  <li>Scheduled maintenance will be announced in advance when possible</li>
                  <li>Emergency maintenance may occur with minimal notice</li>
                  <li>Service credits may be available for extended outages</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Support and Response Times</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Technical support available during business hours (9 AM - 6 PM WAT/EST)</li>
                  <li>Emergency support available for critical issues</li>
                  <li>Response times vary based on issue severity and service level</li>
                  <li>Support channels include email, phone, and online ticketing system</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Performance Standards</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>AI systems designed for optimal performance within specified parameters</li>
                  <li>Regular monitoring and optimization of deployed solutions</li>
                  <li>Performance metrics and reporting available upon request</li>
                  <li>Continuous improvement based on usage patterns and feedback</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability and Disclaimers</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Service Disclaimers</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Services are provided "as is" without warranties of specific outcomes</li>
                  <li>AI systems may have limitations and are not infallible</li>
                  <li>We do not guarantee specific business results or revenue increases</li>
                  <li>Third-party integrations may have their own limitations and terms</li>
                  <li>Performance may vary based on external factors and usage patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Liability Limitations</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Total liability limited to fees paid in the 12 months preceding any claim</li>
                  <li>No liability for indirect, consequential, or punitive damages</li>
                  <li>Force majeure events exclude liability (natural disasters, government actions)</li>
                  <li>Customer's sole remedy is service credit or refund as applicable</li>
                  <li>Liability limitations apply to the fullest extent permitted by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Confidentiality and Data Protection</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Confidential Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We maintain strict confidentiality of your business information</li>
                  <li>Non-disclosure agreements available for sensitive projects</li>
                  <li>Employee training on confidentiality and data protection</li>
                  <li>Secure handling of proprietary and sensitive data</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Data Security</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Industry-standard security measures and encryption</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure development practices and code reviews</li>
                  <li>Incident response procedures for security breaches</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination and Data Handling</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Termination Rights</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Either party may terminate with appropriate notice as specified in agreements</li>
                  <li>Immediate termination for material breach or non-payment</li>
                  <li>Customer may terminate for convenience with proper notice</li>
                  <li>We may terminate for policy violations or misuse of services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Post-Termination</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Data export assistance provided for a reasonable period</li>
                  <li>Service access ceases upon termination</li>
                  <li>Outstanding payments remain due</li>
                  <li>Confidentiality obligations survive termination</li>
                  <li>Return or destruction of confidential information as required</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Dispute Resolution and Governing Law</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Dispute Resolution Process</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Step 1:</strong> Direct negotiation between parties (30 days)</li>
                  <li><strong>Step 2:</strong> Mediation through agreed mediator (60 days)</li>
                  <li><strong>Step 3:</strong> Binding arbitration if mediation fails</li>
                  <li><strong>Emergency Relief:</strong> Court intervention for urgent matters</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Governing Law</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Nigerian customers: Governed by Nigerian law</li>
                  <li>US customers: Governed by Indiana state law</li>
                  <li>International customers: Governed by Nigerian law unless otherwise agreed</li>
                  <li>Jurisdiction: Lagos, Nigeria or Fort Wayne, Indiana as applicable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information and Support</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, technical support, or business inquiries:
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
                    <p className="text-gray-700"><strong>Technical Support:</strong> support@smartbesttechnology.com</p>
                    <p className="text-gray-700"><strong>General Inquiries:</strong> info@smartbesttechnology.com</p>
                    <p className="text-gray-700"><strong>Legal/Compliance:</strong> legal@smartbesttechnology.com</p>
                    <p className="text-gray-700"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (WAT/EST)</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to These Terms</h2>
                <p className="text-gray-700 mb-4">
                  We may update these Terms of Service to reflect changes in our services, legal requirements, or business practices. When we make changes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We will post the updated terms on our website</li>
                  <li>We will update the "Effective Date" at the top of these terms</li>
                  <li>For material changes, we will notify you via email</li>
                  <li>Changes become effective 30 days after posting unless otherwise specified</li>
                  <li>Continued use of our services indicates acceptance of updated terms</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                  <p className="text-yellow-800 font-medium">
                    <strong>Important:</strong> These Terms of Service constitute a legally binding agreement between you and SmartBest Technology. Please review them carefully and contact us if you have any questions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
