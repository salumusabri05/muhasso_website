'use client';

import React, { useState } from 'react';
import { Users, Award, Network, Globe, Heart, Mail, Phone, MapPin, Building, CheckCircle, ArrowRight, Target, Handshake, TrendingUp, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function JoinNetworkPage() {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    fullName: '',
    email: '',
    phone: '',
    position: '',
    country: '',
    city: '',
    website: '',
    focus: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const networkBenefits = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaborative Opportunities",
      description: "Partner on international projects, research initiatives, and student exchange programs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connect with medical student associations across Africa and worldwide"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resource Sharing",
      description: "Access shared resources, best practices, and learning materials"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Professional Development",
      description: "Joint conferences, workshops, and capacity building programs"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advocacy Platform",
      description: "Unified voice on healthcare education and student issues"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Featured on our platform and in our network publications"
    }
  ];

  const currentPartners = [
    {
      name: "TABESA",
      fullName: "Tanzania Biomedical Engineering Students Association",
      type: "National Association",
      members: "3,500+"
    },
    {
      name: "TAMELASA",
      fullName: "Tanzania Medical Laboratory Students Association",
      type: "National Association",
      members: "2,800+"
    },
    {
      name: "TAPHSA",
      fullName: "Tanzania Public Health Students Association",
      type: "National Association",
      members: "4,200+"
    },
    {
      name: "Regional Partners",
      fullName: "East African Medical Students Network",
      type: "Regional Network",
      members: "15,000+"
    }
  ];

  const organizationTypes = [
    "Medical Students Association",
    "Health Sciences Students Organization",
    "Biomedical Engineering Association",
    "Nursing Students Union",
    "Public Health Students Network",
    "Research Institute",
    "Healthcare NGO",
    "Educational Institution",
    "Other"
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-20 px-4 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <Network className="w-5 h-5" />
              <span>Partnership Opportunities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Network
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with MUHASSO and become part of East Africa&apos;s leading network of medical and health sciences student organizations
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-lg">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>25,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span>50+ Partner Organizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Network?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of partnering with MUHASSO and our affiliated organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Network Partners
            </h2>
            <p className="text-gray-600">
              Join these leading organizations in our collaborative network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {partner.fullName}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                        {partner.type}
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {partner.members}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Application
            </h2>
            <p className="text-gray-600">
              Fill out the form below to express your interest in joining our network
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
            {/* Organization Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-purple-600" />
                Organization Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Organization Type *
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select type...</option>
                    {organizationTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter organization name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Contact Person
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Position/Title *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., President, Director"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+255 XXX XXX XXX"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-600" />
                Location
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter country"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter city"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-purple-600" />
                Additional Information
              </h3>
              <div className="grid gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Focus Areas *
                  </label>
                  <input
                    type="text"
                    name="focus"
                    value={formData.focus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Medical Education, Public Health, Research"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message / Partnership Interest *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your organization and why you'd like to join our network..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Heart className="w-6 h-6" />
                Submit Partnership Application
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                We&apos;ll review your application and get back to you within 5-7 business days
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions About Partnership?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Our partnerships team is here to help answer any questions you may have
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:partnerships@muhasso.org"
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-purple-600 font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              partnerships@muhasso.org
            </a>
            <a
              href="tel:+255XXXXXXXXX"
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-purple-600 font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +255 XXX XXX XXX
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
