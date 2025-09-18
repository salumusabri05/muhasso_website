'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Globe, Users, Heart, BookOpen, Award, MapPin, Calendar, Mail, FileText, Download, CheckCircle2, X } from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Image from 'next/image';

// This data would ideally come from a database or API
const associationsData = [
  {
    id: 1,
    name: "tabesa",
    displayName: "TABESA",
    fullName: "Tanzania Biomedical Engineering Students Association",
    description: "Advancing biomedical engineering education and innovation across Tanzania, bridging the gap between engineering technology and healthcare solutions.",
    longDescription: "TABESA is dedicated to promoting excellence in biomedical engineering education and fostering innovation in healthcare technology across Tanzania. The association serves as a platform for biomedical engineering students to develop professional skills, engage in research, and collaborate on healthcare technology solutions that address local challenges.",
    mission: "To advance biomedical engineering education and innovation in Tanzania while fostering collaboration between engineering and healthcare sectors.",
    vision: "To be the leading platform for biomedical engineering excellence in East Africa, producing innovative solutions for healthcare challenges through education and research.",
    type: "National",
    established: "1998",
    members: "50+",
    location: "Tanzania",
    email: "contact@tabesa.org",
    website: "www.tabesa.org",
    fees: "15,000 TZS annual membership fee",
    focus: ["Biomedical Engineering", "Healthcare Technology", "Innovation", "Medical Devices"],
    icon: <Award className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    activities: [
      "Medical Device Innovation Competitions",
      "Healthcare Technology Workshops",
      "Research Symposiums",
      "Industry-Academia Partnerships"
    ],
    benefits: [
      "Access to specialized workshops and training",
      "Industry networking opportunities",
      "Research and development projects",
      "Internship connections with biomedical companies",
      "Technical skills development"
    ],
    eligibility: "Open to all biomedical engineering students enrolled in accredited institutions in Tanzania.",
    leadership: [
      { position: "President", name: "Eng. ally abasi" },
      { position: "Vice President", name: "Eng. akida lawi" },
      { position: "Secretary", name: "Eng. jocelyne mwakilasa" },
      { position: "Treasurer", name: "Eng. john doe" }
    ],
    documents: [
      { name: "TABESA Constitution", type: "PDF" },
      { name: "Membership Application Form", type: "PDF" },
      { name: "Technical Guidelines", type: "PDF" }
    ]
  },
  {
    id: 7,
    name: "apsta",
    displayName: "APSTA",
    fullName: "Association of Physiotherapy Students of Tanzania",
    description: "The national association representing physiotherapy students across Tanzania, promoting excellence in physiotherapy education and professional development.",
    longDescription: "The Association of Physiotherapy Students of Tanzania (APSTA) serves as the unified voice for physiotherapy students throughout Tanzania. Founded to enhance the academic and professional development of physiotherapy students, APSTA works to promote quality education standards, research opportunities, and clinical skills development among its members while advocating for the recognition and advancement of the physiotherapy profession in Tanzania's healthcare system.",
    mission: "To promote excellence in physiotherapy education, advocate for student welfare, and foster professional development among physiotherapy students in Tanzania.",
    vision: "To develop competent, compassionate physiotherapy professionals who will contribute significantly to healthcare delivery and rehabilitation services in Tanzania.",
    type: "National",
    established: "2010",
    members: "100+",
    location: "Tanzania",
    email: "info@apsta.or.tz",
    website: "www.apsta.or.tz",
    fees: "8,000 TZS annual membership fee",
    focus: ["Physiotherapy Education", "Clinical Skills Development", "Research", "Professional Advocacy"],
    icon: <Award className="w-8 h-8" />,
    gradient: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    activities: [
      "Annual Physiotherapy Students Conference",
      "Clinical Skills Workshops",
      "Community Rehabilitation Programs",
      "Research Symposiums"
    ],
    benefits: [
      "Access to specialized clinical skills workshops",
      "Networking with physiotherapy professionals",
      "Research and clinical placement opportunities",
      "Professional development seminars",
      "Advocacy for physiotherapy education standards"
    ],
    eligibility: "Open to all physiotherapy students enrolled in accredited institutions in Tanzania.",
    leadership: [
      { position: "President", name: "Juma Hamisi" },
      { position: "Vice President", name: "Grace Mwakasege" },
      { position: "Secretary", name: "David Makundi" },
      { position: "Treasurer", name: "Rebecca Msafiri" }
    ],
    documents: [
      { name: "APSTA Constitution", type: "PDF" },
      { name: "Physiotherapy Standards Guide", type: "PDF" },
      { name: "APSTA Almanac 2024-2025", type: "PDF" }
    ]
  },
  {
    id: 8,
    name: "totsa",
    displayName: "TOTSA",
    fullName: "Tanzania Occupational Therapy Students Association",
    description: "National organization representing occupational therapy students in Tanzania, promoting excellence in occupational therapy education and practice.",
    longDescription: "The Tanzania Occupational Therapy Students Association (TOTSA) represents and supports occupational therapy students throughout Tanzania. The association is dedicated to advancing occupational therapy education, promoting the profession, and providing a platform for students to develop their clinical and professional skills. TOTSA works closely with educational institutions and professional bodies to ensure high standards in occupational therapy training and practice in Tanzania.",
    mission: "To unite occupational therapy students across Tanzania in pursuit of excellence in education and practice while advocating for the profession's growth and recognition.",
    vision: "To develop a vibrant community of occupational therapy professionals equipped to address Tanzania's diverse healthcare needs through occupation-centered approaches.",
    type: "National",
    established: "2013",
    members: "100+",
    location: "Tanzania",
    email: "info@totsa.or.tz",
    website: "www.totsa.or.tz",
    fees: "7,500 TZS annual membership fee",
    focus: ["Occupational Therapy Education", "Clinical Practice", "Professional Recognition", "Community Service"],
    icon: <Users className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
    activities: [
      "OT Day Celebrations",
      "Community Outreach Programs",
      "Clinical Skills Workshops",
      "Student Research Forum"
    ],
    benefits: [
      "Clinical placement support",
      "Mentorship programs",
      "Professional development workshops",
      "Networking with OT practitioners",
      "Advocacy for profession recognition"
    ],
    eligibility: "Open to all occupational therapy students enrolled in accredited institutions in Tanzania.",
    leadership: [
      { position: "Chairperson", name: "Felix Kaganda" },
      { position: "Vice Chair", name: "Beatrice Nyondo" },
      { position: "General Secretary", name: "Michael Hamisi" },
      { position: "Treasurer", name: "Patricia Chuma" }
    ],
    documents: [
      { name: "TOTSA Constitution", type: "PDF" },
      { name: "OT Practice Guidelines", type: "PDF" },
      { name: "Community Practice Manual", type: "PDF" }
    ]
  }
];

const AssociationDetailPage = ({ params }) => {
  const { association } = params;
  const [activeTab, setActiveTab] = useState('about');
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Find the association data based on the URL parameter
  const associationData = associationsData.find(a => a.name === association);
  
  // If association not found, return 404
  if (!associationData) {
    notFound();
  }
  
  const getIcon = () => {
    switch(associationData.name) {
      case 'tamsa': return <Heart className="w-12 h-12" />;
      case 'tabesa': return <Award className="w-12 h-12" />;
      case 'ifmsa': return <Globe className="w-12 h-12" />;

      case 'eamsa': return <Users className="w-12 h-12" />;
      case 'amsa': return <MapPin className="w-12 h-12" />;
      case 'apsta': return <div className="relative w-12 h-12"><Image src="/asscociation_details/APSTA LOGO.jpg" alt="APSTA Logo" fill className="object-contain" /></div>;
      case 'totsa': return <div className="relative w-12 h-12"><Image src="/asscociation_details/TOTSA LOGO(TANZANIA OCCUPATIONAL THERAY STUDENTS ASSOCIATIO).jpg" alt="TOTSA Logo" fill className="object-contain" /></div>;
      default: return <Globe className="w-12 h-12" />;
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the actual form submission
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 3000);
  };
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow bg-gray-50 py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`${associationData.bgColor} rounded-3xl overflow-hidden shadow-lg mb-8`}>
            <div className={`bg-gradient-to-r ${associationData.gradient} h-24 md:h-48 relative`}>
              <div className="absolute bottom-0 transform translate-y-1/2 left-8">
                <div className={`w-20 h-20 md:w-32 md:h-32 rounded-xl bg-white shadow-lg flex items-center justify-center border-4 ${associationData.borderColor}`}>
                  {getIcon()}
                </div>
              </div>
            </div>
            
            <div className="pt-12 md:pt-16 pb-8 px-6 md:px-12">
              <div className="md:ml-40">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{associationData.displayName}</h1>
                    <h2 className={`text-lg ${associationData.textColor} font-medium mb-4`}>{associationData.fullName}</h2>
                  </div>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold self-start md:self-auto ${getTypeColor(associationData.type)}`}>
                    {associationData.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Established: {associationData.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Members: {associationData.members}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Location: {associationData.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 max-w-4xl">
                  {associationData.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('about')}
                className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'about' 
                    ? `border-${associationData.textColor.split('-')[1]}-600 ${associationData.textColor}` 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('membership')}
                className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'membership' 
                    ? `border-${associationData.textColor.split('-')[1]}-600 ${associationData.textColor}` 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Membership
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'documents' 
                    ? `border-${associationData.textColor.split('-')[1]}-600 ${associationData.textColor}` 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Documents & Resources
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'contact' 
                    ? `border-${associationData.textColor.split('-')[1]}-600 ${associationData.textColor}` 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="pb-16">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">About {associationData.displayName}</h3>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 mb-6">{associationData.longDescription}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Mission</h4>
                        <p className="text-gray-700">{associationData.mission}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Vision</h4>
                        <p className="text-gray-700">{associationData.vision}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Leadership</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {associationData.leadership.map((leader, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="font-medium text-gray-900">{leader.name}</div>
                              <div className="text-sm text-gray-500">{leader.position}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Focus Areas</h4>
                      <div className="space-y-3">
                        {associationData.focus.map((area, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`w-2 h-2 mt-2 rounded-full bg-${associationData.textColor.split('-')[1]}-500 mr-3`}></div>
                            <span className="text-gray-700">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Activities</h4>
                      <div className="space-y-3">
                        {associationData.activities.map((activity, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`w-2 h-2 mt-2 rounded-full bg-${associationData.textColor.split('-')[1]}-500 mr-3`}></div>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Membership Tab */}
            {activeTab === 'membership' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Information</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h4>
                      <p className="text-gray-700 mb-6">{associationData.eligibility}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Membership Fees</h4>
                      <p className="text-gray-700 mb-6">{associationData.fees}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h4>
                      <div className="space-y-3 mb-8">
                        {associationData.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle2 className={`w-5 h-5 ${associationData.textColor} flex-shrink-0 mr-3`} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <button 
                          onClick={() => setShowForm(!showForm)} 
                          className={`bg-gradient-to-r ${associationData.gradient} text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-200`}
                        >
                          Apply for Membership
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Merchandise</h4>
                      <p className="text-gray-700 mb-4">Show your support with official {associationData.displayName} merchandise.</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">T-Shirts</span>
                          <span className="font-medium text-gray-900">15,000 TZS</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">Hoodies</span>
                          <span className="font-medium text-gray-900">25,000 TZS</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">Caps</span>
                          <span className="font-medium text-gray-900">10,000 TZS</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">Tote Bags</span>
                          <span className="font-medium text-gray-900">8,000 TZS</span>
                        </div>
                      </div>
                      <button className={`mt-4 w-full bg-gray-100 hover:bg-gray-200 ${associationData.textColor} font-medium py-2 rounded-lg transition-colors`}>
                        Order Merchandise
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Member Events</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <p className="font-medium text-gray-900">Annual General Meeting</p>
                          <p className="text-sm text-gray-500">September 30, 2025</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-medium text-gray-900">New Member Orientation</p>
                          <p className="text-sm text-gray-500">October 15, 2025</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <p className="font-medium text-gray-900">Leadership Workshop</p>
                          <p className="text-sm text-gray-500">November 5, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Membership Application Form */}
                {showForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Membership Application</h3>
                        <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                      
                      {formSubmitted ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h4>
                          <p className="text-gray-600">Thank you for your interest. We will review your application and contact you soon.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                              <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                              <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Institution/University</label>
                            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Year of Study</label>
                            <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              <option value="">Select Year</option>
                              <option value="1">First Year</option>
                              <option value="2">Second Year</option>
                              <option value="3">Third Year</option>
                              <option value="4">Fourth Year</option>
                              <option value="5">Fifth Year</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join {associationData.displayName}?</label>
                            <textarea rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                          </div>
                          
                          <div className="mb-6">
                            <div className="flex items-start">
                              <input type="checkbox" required id="terms" className="mt-1 mr-3" />
                              <label htmlFor="terms" className="text-sm text-gray-700">
                                I agree to the terms and conditions of {associationData.displayName} and consent to the processing of my personal data.
                              </label>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 text-gray-700 font-medium bg-gray-100 rounded-lg hover:bg-gray-200 mr-4">
                              Cancel
                            </button>
                            <button type="submit" className={`px-6 py-2 bg-gradient-to-r ${associationData.gradient} text-white font-medium rounded-lg hover:shadow-md transition-all`}>
                              Submit Application
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents & Resources</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {associationData.documents.map((document, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                      <div className={`h-3 bg-gradient-to-r ${associationData.gradient}`}></div>
                      <div className="p-6">
                        <div className="mb-4">
                          <FileText className={`w-10 h-10 ${associationData.textColor}`} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{document.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{document.type} • Last updated: August 2025</p>
                        <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Presentations</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">Annual Conference Keynote 2025</a>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">Strategic Plan Overview</a>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">New Member Orientation Slides</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Forms</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">Event Proposal Form</a>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">Project Funding Request</a>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <a href="#" className="text-blue-600 hover:underline">Leadership Position Application</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className={`w-12 h-12 ${associationData.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <Mail className={`w-6 h-6 ${associationData.textColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700 mb-1">{associationData.email}</p>
                    <p className="text-gray-500 text-sm">For general inquiries</p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className={`w-12 h-12 ${associationData.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <Globe className={`w-6 h-6 ${associationData.textColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Website</h4>
                    <p className="text-gray-700 mb-1">{associationData.website}</p>
                    <p className="text-gray-500 text-sm">Official website</p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className={`w-12 h-12 ${associationData.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <MapPin className={`w-6 h-6 ${associationData.textColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-700 mb-1">{associationData.location}</p>
                    <p className="text-gray-500 text-sm">Headquarters</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h4>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                    </div>
                    
                    <button type="submit" className={`bg-gradient-to-r ${associationData.gradient} text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-200`}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

// Helper function for type color
const getTypeColor = (type) => {
  switch (type) {
    case 'International': return 'bg-purple-100 text-purple-700';
    case 'Continental': return 'bg-teal-100 text-teal-700';
    case 'Regional': return 'bg-orange-100 text-orange-700';
    case 'National': return 'bg-blue-100 text-blue-700';
    case 'University': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default AssociationDetailPage;
