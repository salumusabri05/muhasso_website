'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Info, Shield, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  // Last updated date
  const lastUpdated = "September 15, 2023";

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
          
          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  MUHASSO (Muhimbili University of Health and Allied Sciences Student Organization) is committed 
                  to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website, use our mobile application, or interact 
                  with our services.
                </p>
                <p className="text-gray-700">
                  Please read this privacy policy carefully. By accessing and using our services, you acknowledge 
                  that you have read, understood, and agree to be bound by the terms of this policy. If you do 
                  not agree with the terms of this privacy policy, please do not access the website or use our services.
                </p>
              </div>
            </div>
          </section>
          
          {/* Information We Collect */}
          <section className="mb-10">
            <div className="flex items-start">
              <Info className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Information We Collect</h2>
                
                <h3 className="font-medium text-blue-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 pl-4">
                  <li>Register for an account</li>
                  <li>Sign up for our newsletter or communications</li>
                  <li>Submit forms on our website</li>
                  <li>Participate in surveys or contests</li>
                  <li>Contact our support team</li>
                  <li>Apply for MUHASSO membership or programs</li>
                </ul>
                
                <p className="text-gray-700 mb-4">
                  This personal information may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 pl-4">
                  <li>Full name</li>
                  <li>Student ID number</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Program of study</li>
                  <li>Year of study</li>
                  <li>Date of birth</li>
                  <li>Profile photos</li>
                </ul>
                
                <h3 className="font-medium text-blue-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you access our website or use our application, we may automatically collect certain 
                  information about your device and usage, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 pl-4">
                  <li>Device type and operating system</li>
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Time and date of access</li>
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                  <li>Links clicked</li>
                  <li>Referring website</li>
                </ul>
                
                <h3 className="font-medium text-blue-900 mb-2">Cookies and Similar Technologies</h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to collect information about your browsing 
                  activities. These tools help us provide you with a better website experience, analyze site 
                  traffic, and understand where our visitors are coming from.
                </p>
                <p className="text-gray-700">
                  You can set your browser to refuse cookies or alert you when cookies are being sent. However, 
                  some parts of our website may not function properly if you disable cookies.
                </p>
              </div>
            </div>
          </section>
          
          {/* How We Use Your Information */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may use the information we collect for various purposes, including:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Providing and Improving Our Services</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Processing and managing your account</li>
                      <li>Delivering the services and features you request</li>
                      <li>Responding to your inquiries and support requests</li>
                      <li>Enhancing and personalizing your experience</li>
                      <li>Developing new features and services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Communication</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Sending administrative notifications related to your account</li>
                      <li>Providing updates about MUHASSO activities and events</li>
                      <li>Delivering newsletters and educational content</li>
                      <li>Sending service-related announcements</li>
                      <li>Responding to your communications with us</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Analytics and Research</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Understanding user behavior and preferences</li>
                      <li>Measuring the effectiveness of our content and services</li>
                      <li>Analyzing trends and usage patterns</li>
                      <li>Improving our website design and functionality</li>
                      <li>Conducting research to enhance student services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Security and Protection</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Detecting and preventing fraudulent or unauthorized activities</li>
                      <li>Protecting our rights, property, and safety</li>
                      <li>Verifying your identity</li>
                      <li>Enforcing our terms of service</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Information Sharing and Disclosure */}
          <section className="mb-10">
            <div className="flex items-start">
              <Lock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We respect your privacy and are committed to protecting your personal information. We may 
                  share your information in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">With Your Consent</h3>
                    <p className="text-gray-700">
                      We may share your information when you give us explicit consent to do so, such as when 
                      you opt-in to share your information with a specific partner or service provider.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Service Providers</h3>
                    <p className="text-gray-700">
                      We may share information with third-party vendors, consultants, and other service providers 
                      who work on our behalf and need access to your information to perform their services, such 
                      as email delivery, hosting services, analytics, and customer service.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">University Administration</h3>
                    <p className="text-gray-700">
                      We may share limited information with Muhimbili University administration for official 
                      purposes related to student services, event coordination, and academic affairs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Compliance with Laws</h3>
                    <p className="text-gray-700">
                      We may disclose your information if required to do so by law or in response to valid 
                      requests from public authorities (e.g., a court order, government request, or subpoena).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Protection of Rights</h3>
                    <p className="text-gray-700">
                      We may disclose information about you if we reasonably believe that such disclosure is 
                      necessary to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Protect our rights, property, or safety</li>
                      <li>Protect the rights, property, or safety of our users or others</li>
                      <li>Investigate and defend against any third-party claims or allegations</li>
                      <li>Prevent or address potential fraud or security issues</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Aggregated or Anonymized Data</h3>
                    <p className="text-gray-700">
                      We may share aggregated or anonymized information that does not directly identify you for 
                      research, reporting, or statistical analysis purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Data Security */}
          <section className="mb-10">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect the security of your 
                  personal information. However, please be aware that no method of transmission over the Internet 
                  or method of electronic storage is 100% secure.
                </p>
                <p className="text-gray-700 mb-4">
                  Our security practices include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-4">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure network infrastructure</li>
                  <li>Regular software updates and patches</li>
                  <li>Staff training on data protection and privacy</li>
                </ul>
                <p className="text-gray-700">
                  While we strive to use commercially acceptable means to protect your personal information, 
                  we cannot guarantee its absolute security. If you have reason to believe that your interaction 
                  with us is no longer secure, please immediately notify us using the contact information provided below.
                </p>
              </div>
            </div>
          </section>
          
          {/* Your Rights and Choices */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Access and Update</h3>
                    <p className="text-gray-700">
                      You can review and update your account information by logging into your account. If you need 
                      assistance accessing or updating your information, please contact us using the information below.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Communication Preferences</h3>
                    <p className="text-gray-700">
                      You can opt-out of receiving promotional emails by clicking the &quot;unsubscribe&quot; link at the 
                      bottom of each email. Please note that even if you opt-out of promotional communications, 
                      we may still send you administrative messages related to your account or our services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Cookie Controls</h3>
                    <p className="text-gray-700">
                      Most web browsers are set to accept cookies by default. You can adjust your browser settings 
                      to decline cookies if you prefer. Please note that disabling cookies may affect the functionality 
                      of our website and services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Data Retention</h3>
                    <p className="text-gray-700">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined 
                      in this privacy policy, unless a longer retention period is required or permitted by law. When 
                      your information is no longer needed, we will securely delete or anonymize it.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Account Deletion</h3>
                    <p className="text-gray-700">
                      You may request deletion of your account and personal information by contacting us. Please 
                      note that some information may be retained in our records as required for legal, accounting, 
                      or legitimate business purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Children's Privacy */}
          <section className="mb-10">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Children&apos;s Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                  personal information from children under 18. If you are a parent or guardian and believe that 
                  your child has provided us with personal information, please contact us immediately, and we will 
                  take steps to remove such information from our records.
                </p>
              </div>
            </div>
          </section>
          
          {/* Changes to This Privacy Policy */}
          <section className="mb-10">
            <div className="flex items-start">
              <Info className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
                <p className="text-gray-700">
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this 
                  Privacy Policy are effective when they are posted on this page. Your continued use of our 
                  services after the posting of changes constitutes your acceptance of such changes.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Us */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us at:
            </p>
            
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> privacy@muhasso.org
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Mail:</span> MUHASSO Privacy Office, Muhimbili University of Health and Allied Sciences, P.O. Box 65001, Dar es Salaam, Tanzania
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
                href="/terms" 
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-blue-600 transition-colors"
              >
                Terms of Service
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
