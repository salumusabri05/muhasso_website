'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FileText, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  // Add animation styles
  React.useEffect(() => {
    // This empty effect is just to ensure the component re-renders for animations
  }, []);
  
  // Last updated date
  const lastUpdated = "September 15, 2023";

  return (
    <main className="min-h-screen flex flex-col bg-white animate-fadeIn">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-slideDown">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
          
          {/* Introduction */}
          <section className="mb-10 animate-slideUp">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to MUHASSO (Muhimbili University of Health and Allied Sciences Student Organization). 
                  These Terms of Service govern your access to and use of the MUHASSO website, mobile 
                  application, and services.
                </p>
                <p className="text-gray-700 mb-4">
                  Please read these Terms carefully. By accessing or using our services, you agree to be bound 
                  by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not 
                  access or use our services.
                </p>
                <p className="text-gray-700">
                  MUHASSO provides various services to students of Muhimbili University of Health and Allied 
                  Sciences, including but not limited to academic support, event organization, student representation, 
                  welfare services, and community engagement opportunities.
                </p>
              </div>
            </div>
          </section>
          
          {/* Definitions */}
          <section className="mb-10 animate-slideUp delay-100">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Definitions</h2>
                <ul className="space-y-4">
                  <li>
                    <p className="text-gray-700">
                      <span className="font-medium">MUHASSO:</span> Refers to Muhimbili University of Health and Allied 
                      Sciences Student Organization, its officers, representatives, and authorized agents.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-700">
                      <span className="font-medium">Services:</span> Refers to the MUHASSO website, mobile application, 
                      content, programs, events, and other offerings provided by MUHASSO.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-700">
                      <span className="font-medium">User:</span> Refers to any individual who accesses or uses MUHASSO services, 
                      including registered students, faculty, staff, and visitors.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-700">
                      <span className="font-medium">Content:</span> Refers to text, images, photos, audio, video, graphics, 
                      and all other forms of information or data presented on MUHASSO platforms.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Eligibility */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Eligibility</h2>
                <p className="text-gray-700 mb-4">
                  By using our services, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>
                    You are at least 18 years of age or accessing the services under the supervision of a parent or guardian.
                  </li>
                  <li>
                    You have the legal capacity and authority to enter into these Terms.
                  </li>
                  <li>
                    You are a registered student, faculty member, or staff of Muhimbili University of Health and Allied Sciences, 
                    or otherwise authorized to access our services.
                  </li>
                  <li>
                    You agree to comply with these Terms and all applicable local, state, national, and international laws, 
                    rules, and regulations.
                  </li>
                </ul>
                <p className="text-gray-700">
                  Some services may have additional eligibility requirements as specified in the specific terms or 
                  descriptions of those services.
                </p>
              </div>
            </div>
          </section>
          
          {/* Account Registration and Security */}
          <section className="mb-10">
            <div className="flex items-start">
              <ShieldAlert className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Account Registration and Security</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our services, you may need to register for an account. When registering, 
                  you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>
                    Provide accurate, current, and complete information about yourself.
                  </li>
                  <li>
                    Maintain and promptly update your account information.
                  </li>
                  <li>
                    Keep your account credentials secure and confidential.
                  </li>
                  <li>
                    Not share your account with anyone else.
                  </li>
                  <li>
                    Notify MUHASSO immediately of any unauthorized use of your account or any other security breach.
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You are solely responsible for all activities that occur under your account. MUHASSO will not be 
                  liable for any loss or damage arising from your failure to maintain account security.
                </p>
                <p className="text-gray-700">
                  We reserve the right to suspend or terminate your account if any information provided is inaccurate, 
                  false, or no longer current, or if we have reason to believe you have violated these Terms.
                </p>
              </div>
            </div>
          </section>
          
          {/* User Conduct */}
          <section className="mb-10">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">User Conduct</h2>
                <p className="text-gray-700 mb-4">
                  When using our services, you agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-4">
                  <li>
                    Violate any applicable laws, regulations, or third-party rights.
                  </li>
                  <li>
                    Use the services for any illegal, harmful, fraudulent, or abusive purpose.
                  </li>
                  <li>
                    Post, upload, or distribute content that is unlawful, defamatory, harassing, threatening, invasive of privacy, 
                    harmful to minors, or objectionable.
                  </li>
                  <li>
                    Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.
                  </li>
                  <li>
                    Interfere with or disrupt the services or servers connected to the services.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the services or any systems or networks connected to the services.
                  </li>
                  <li>
                    Use automated means or processes to access or use the services without our express permission.
                  </li>
                  <li>
                    Transmit any viruses, malware, or other harmful code.
                  </li>
                  <li>
                    Collect or harvest information about other users without their consent.
                  </li>
                </ul>
                <p className="text-gray-700">
                  MUHASSO reserves the right to investigate and take appropriate action against anyone who violates these provisions, 
                  including removing content, suspending or terminating accounts, and reporting violations to law enforcement authorities.
                </p>
              </div>
            </div>
          </section>
          
          {/* Intellectual Property */}
          <section className="mb-10">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The services and their content, features, and functionality are owned by MUHASSO and are protected by 
                  copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                
                <h3 className="font-medium text-blue-900 mb-2">MUHASSO Content</h3>
                <p className="text-gray-700 mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                  republish, download, store, transmit or otherwise exploit any of the content on our services without the 
                  prior written consent of MUHASSO or the respective copyright owners.
                </p>
                
                <h3 className="font-medium text-blue-900 mb-2">User Content</h3>
                <p className="text-gray-700 mb-4">
                  By submitting, posting, or displaying content on or through our services, you grant MUHASSO a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and 
                  display such content for the purpose of providing and promoting our services.
                </p>
                <p className="text-gray-700">
                  You represent and warrant that you own or have the necessary rights to grant us this license and that your 
                  content does not violate the intellectual property rights or other rights of any third party.
                </p>
              </div>
            </div>
          </section>
          
          {/* Disclaimer of Warranties */}
          <section className="mb-10">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                </p>
                <p className="text-gray-700 mb-4">
                  MUHASSO DOES NOT WARRANT THAT:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>
                    THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR PLACE.
                  </li>
                  <li>
                    ANY ERRORS OR DEFECTS WILL BE CORRECTED.
                  </li>
                  <li>
                    THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </li>
                  <li>
                    THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
                  </li>
                </ul>
                <p className="text-gray-700">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION 
                  OF LIABILITY FOR CERTAIN TYPES OF DAMAGES. THEREFORE, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY 
                  TO YOU.
                </p>
              </div>
            </div>
          </section>
          
          {/* Limitation of Liability */}
          <section className="mb-10">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MUHASSO, ITS OFFICERS, 
                  DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR 
                  LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING 
                  TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
                </p>
                <p className="text-gray-700 mb-4">
                  MUHASSO SHALL NOT BE LIABLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>
                    YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICES.
                  </li>
                  <li>
                    ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES.
                  </li>
                  <li>
                    UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
                  </li>
                  <li>
                    ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES.
                  </li>
                </ul>
                <p className="text-gray-700">
                  THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, 
                  TORT (INCLUDING NEGLIGENCE), OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE 
                  OR MUHASSO WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </div>
          </section>
          
          {/* Indemnification */}
          <section className="mb-10">
            <div className="flex items-start">
              <ShieldAlert className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Indemnification</h2>
                <p className="text-gray-700">
                  You agree to defend, indemnify, and hold harmless MUHASSO, its officers, directors, employees, and 
                  agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, 
                  or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of 
                  these Terms or your use of the services, including, but not limited to, your user content, any use 
                  of the services&apos; content, services, and products other than as expressly authorized in these Terms.
                </p>
              </div>
            </div>
          </section>
          
          {/* Termination */}
          <section className="mb-10">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                  MUHASSO may terminate or suspend your access to all or part of the services immediately, without 
                  prior notice or liability, for any reason, including without limitation if you breach these Terms.
                </p>
                <p className="text-gray-700 mb-4">
                  Upon termination, your right to use the services will immediately cease. All provisions of these 
                  Terms which by their nature should survive termination shall survive termination, including, without 
                  limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
                <p className="text-gray-700">
                  You may also terminate your account by contacting us and requesting account deletion. Please note 
                  that some information may be retained in our records as required for legal, accounting, or legitimate 
                  business purposes.
                </p>
              </div>
            </div>
          </section>
          
          {/* Changes to Terms */}
          <section className="mb-10">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a 
                  revision is material, we will make reasonable efforts to provide at least 30 days&apos; notice prior to 
                  any new terms taking effect.
                </p>
                <p className="text-gray-700 mb-4">
                  What constitutes a material change will be determined at our sole discretion. By continuing to 
                  access or use our services after those revisions become effective, you agree to be bound by the 
                  revised terms.
                </p>
                <p className="text-gray-700">
                  It is your responsibility to review these Terms periodically for changes. If you do not agree to any 
                  of the modified terms, you should discontinue your use of the services.
                </p>
              </div>
            </div>
          </section>
          
          {/* Governing Law */}
          <section className="mb-10">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms and your use of the services shall be governed by and construed in accordance with 
                  the laws of Tanzania, without regard to its conflict of law provisions. Any legal action or 
                  proceeding arising under these Terms shall be brought exclusively in the courts located in 
                  Dar es Salaam, Tanzania, and you hereby consent to the personal jurisdiction and venue therein.
                </p>
              </div>
            </div>
          </section>
          
          {/* Miscellaneous */}
          <section className="mb-10">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Miscellaneous</h2>
                
                <h3 className="font-medium text-blue-900 mb-2">Entire Agreement</h3>
                <p className="text-gray-700 mb-4">
                  These Terms, together with our Privacy Policy and any other legal notices or additional terms and 
                  conditions published by MUHASSO on the services, shall constitute the entire agreement between you 
                  and MUHASSO concerning the services.
                </p>
                
                <h3 className="font-medium text-blue-900 mb-2">Waiver</h3>
                <p className="text-gray-700 mb-4">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or 
                  any other term, and MUHASSO&apos;s failure to assert any right or provision under these Terms shall not 
                  constitute a waiver of such right or provision.
                </p>
                
                <h3 className="font-medium text-blue-900 mb-2">Severability</h3>
                <p className="text-gray-700 mb-4">
                  If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, 
                  or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent 
                  necessary, and the remaining provisions of the Terms will continue in full force and effect.
                </p>
                
                <h3 className="font-medium text-blue-900 mb-2">Assignment</h3>
                <p className="text-gray-700">
                  You may not assign or transfer these Terms, by operation of law or otherwise, without MUHASSO&apos;s prior 
                  written consent. Any attempt by you to assign or transfer these Terms without such consent will be 
                  null and void. MUHASSO may freely assign or transfer these Terms without restriction.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Us */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> legal@muhasso.org
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Mail:</span> MUHASSO Legal Office, Muhimbili University of Health and Allied Sciences, P.O. Box 65001, Dar es Salaam, Tanzania
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +255 22 2150115
              </p>
            </div>
          </section>
          
          {/* Related Links */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Related Policies</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/privacy" 
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/accessibility" 
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-blue-600 transition-colors"
              >
                Accessibility Statement
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
