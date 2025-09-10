import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <p className="text-blue-200 text-sm leading-relaxed">
                MUHASSO is a Non-Profit Association officially registered with the 
                Tanzania Students&apos; Organizations Registry (TSOR)
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-blue-200 text-sm">
                <span className="font-medium">Registration Number:</span> NGO/12345
              </p>
              
              <p className="text-blue-200 text-sm">
                <span className="font-medium">License:</span> TSO987654
              </p>
              
              <div className="text-blue-200 text-sm">
                <p className="font-medium mb-1">Address:</p>
                <p className="font-bold text-white">MUHASSO Secretariat,</p>
                <p>Muhimbili University of Health</p>
                <p>and Allied Sciences, P.O. Box 65001,</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
              
              <div className="flex items-center space-x-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4" />
                <span>Contact: info@muhasso.org</span>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-6">
              <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-900" />
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-xl font-bold mb-6">Who we are</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">MUHASSO History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Honorary Life Members</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Past Officials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">External Affairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join us</a></li>
            </ul>
          </div>

          {/* Standing Committees */}
          <div>
            <h3 className="text-xl font-bold mb-6">Standing Committees</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Research Exchanges (SCORE)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional Exchanges (SCOPE)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Education (SCOME)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Human Rights & Peace (SCORP)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Public Health (SCOPH)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sexual and Reproductive Health and Rights including HIV and AIDS (SCORA)</a></li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Legal and ANBI</h4>
              <ul className="space-y-3 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About MUHASSO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Constitution & Bylaws</a></li>
              </ul>
            </div>
          </div>

          {/* Events & Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Events & Trainings</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">General Assemblies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">March Meeting 2025</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sub-Regional Trainings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regional Meetings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team of Officials Meetings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Youth Pre World Health Assembly</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calls</a></li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Advocacy</h4>
              <ul className="space-y-3 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Advocacy Priorities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Policy Papers</a></li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Media</h4>
              <ul className="space-y-3 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Media Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Muhimbili University Students Organization (MUHASSO). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;