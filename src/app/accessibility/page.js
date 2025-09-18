'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Accessibility, CheckCircle, BookOpen, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  // Last updated date
  const lastUpdated = "September 15, 2023";

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Accessibility Statement</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
          
          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-start">
              <Accessibility className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Commitment to Accessibility</h2>
                <p className="text-gray-700 mb-4">
                  MUHASSO (Muhimbili University of Health and Allied Sciences Student Organization) is committed 
                  to ensuring digital accessibility for people with disabilities. We are continually improving the 
                  user experience for everyone, and applying the relevant accessibility standards.
                </p>
                <p className="text-gray-700">
                  We strive to ensure that our website and digital services comply with the Web Content Accessibility 
                  Guidelines (WCAG) 2.1 at Level AA and follow best practices for inclusive design. Our goal is to 
                  make our digital content accessible and usable for all users, including those with disabilities.
                </p>
              </div>
            </div>
          </section>
          
          {/* Conformance Status */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Conformance Status</h2>
                <p className="text-gray-700 mb-4">
                  The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers 
                  to improve accessibility for people with disabilities. It defines three levels of conformance: 
                  Level A, Level AA, and Level AAA.
                </p>
                <p className="text-gray-700 mb-4">
                  The MUHASSO website aims to conform to WCAG 2.1 Level AA. We are working to achieve this by:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>Providing text alternatives for non-text content</li>
                  <li>Ensuring content is perceivable and navigable</li>
                  <li>Making the interface operable by keyboard</li>
                  <li>Ensuring content is readable and understandable</li>
                  <li>Making our website robust enough to work with current and future user tools</li>
                </ul>
                <p className="text-gray-700">
                  We are actively working on assessing and improving our website&apos;s accessibility. Some parts of 
                  the website may not yet fully conform to WCAG 2.1 Level AA standards, and we are committed to 
                  addressing these issues as quickly as possible.
                </p>
              </div>
            </div>
          </section>
          
          {/* Accessibility Features */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Accessibility Features</h2>
                <p className="text-gray-700 mb-4">
                  Our website includes the following accessibility features:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Text and Typography</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Clear, readable fonts with appropriate sizing</li>
                      <li>Sufficient contrast between text and background colors</li>
                      <li>Text can be resized up to 200% without loss of functionality</li>
                      <li>Proper heading structure for screen reader navigation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Navigation</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Skip to main content link</li>
                      <li>Consistent navigation structure throughout the site</li>
                      <li>Keyboard-accessible navigation menus</li>
                      <li>Visible focus indicators for keyboard users</li>
                      <li>Descriptive and unique page titles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Images and Media</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Alternative text for images</li>
                      <li>Captions and transcripts for videos</li>
                      <li>No content that flashes more than three times per second</li>
                      <li>Media players with accessible controls</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Forms and Interactive Elements</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Proper labeling of form controls</li>
                      <li>Error identification and suggestions</li>
                      <li>Form validation with clear error messages</li>
                      <li>Sufficient time to complete forms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Limitations and Alternatives */}
          <section className="mb-10">
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Known Limitations and Alternatives</h2>
                <p className="text-gray-700 mb-4">
                  Despite our efforts to ensure accessibility of the MUHASSO website, there may be some limitations:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">PDF Documents</h3>
                    <p className="text-gray-700 mb-2">
                      Some of our older PDF documents may not be fully accessible. We are working to remediate 
                      these documents or provide accessible alternatives.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Alternative:</span> If you encounter an inaccessible PDF, please 
                      contact us, and we will provide the information in an accessible format.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Complex Tables</h3>
                    <p className="text-gray-700 mb-2">
                      Some data tables, particularly in our academic resources section, may be difficult to navigate 
                      with screen readers.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Alternative:</span> We can provide simplified versions of complex 
                      tables upon request.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Third-Party Content</h3>
                    <p className="text-gray-700 mb-2">
                      Some content provided by third parties may not fully meet accessibility standards.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Alternative:</span> We are working with our partners to improve the 
                      accessibility of third-party content, and we can provide alternative formats upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Assistive Technology Compatibility */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Assistive Technology Compatibility</h2>
                <p className="text-gray-700 mb-4">
                  The MUHASSO website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                  <li>Screen magnifiers</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Switch devices</li>
                </ul>
                <p className="text-gray-700">
                  We test our website with various assistive technologies to ensure compatibility, but we recognize 
                  that there may be instances where improvements are needed. Please let us know if you encounter any 
                  difficulties using our website with your assistive technology.
                </p>
              </div>
            </div>
          </section>
          
          {/* Campus Accessibility Services */}
          <section className="mb-10">
            <div className="flex items-start">
              <Accessibility className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Campus Accessibility Services</h2>
                <p className="text-gray-700 mb-4">
                  MUHASSO is committed to ensuring equal access to education and services for students with disabilities. 
                  We work closely with the University&apos;s Office of Disability Services to provide accommodations and support.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Available Services</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      <li>Academic accommodations (extended time for exams, note-taking assistance, etc.)</li>
                      <li>Accessible learning materials and formats</li>
                      <li>Assistive technology resources and training</li>
                      <li>Sign language interpreters</li>
                      <li>Physical accessibility accommodations</li>
                      <li>Peer mentoring and support groups</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">How to Request Accommodations</h3>
                    <p className="text-gray-700">
                      To request accommodations or support services, please contact the Office of Disability Services 
                      at disabilityservices@muhas.ac.tz or visit their office in the Student Affairs Building, Room 105. 
                      Documentation of disability may be required to determine appropriate accommodations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Continuous Improvement */}
          <section className="mb-10">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Commitment to Continuous Improvement</h2>
                <p className="text-gray-700 mb-4">
                  We are committed to continuously improving the accessibility and inclusivity of our digital services. 
                  Our ongoing efforts include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4">
                  <li>Regular accessibility audits and assessments</li>
                  <li>User testing with people who use assistive technologies</li>
                  <li>Accessibility training for our web development and content teams</li>
                  <li>Prompt attention to accessibility issues reported by users</li>
                  <li>Staying informed about emerging accessibility standards and best practices</li>
                </ul>
                <p className="text-gray-700">
                  We welcome your feedback on the accessibility of our website. Your input helps us identify areas 
                  for improvement and better serve all members of our community.
                </p>
              </div>
            </div>
          </section>
          
          {/* Feedback and Contact */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Feedback and Contact Information</h2>
            <p className="text-gray-700 mb-6">
              We welcome your feedback on the accessibility of the MUHASSO website. If you encounter accessibility 
              barriers or have suggestions for improvement, please contact us:
            </p>
            
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">accessibility@muhasso.org</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+255 22 2150115 (ext. 310)</span>
              </p>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700">
                We aim to respond to accessibility feedback within 3 business days. If you encounter any 
                issues or barriers accessing information or services on our website, please let us know, 
                and we will work to provide the information in an accessible alternative format.
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
                href="/terms" 
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
