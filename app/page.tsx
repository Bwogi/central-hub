'use client';
import React from 'react';
import { Card, Badge, Layout, Space, Divider } from 'antd';
import { Shield, Lock, Eye, Binary, Network, Database, Cloud, UserCheck, AlertTriangle, FileSearch, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const { Footer } = Layout;

const SecurityHub = () => {
  const solutions = [
    {
      title: "FTZ Container Verification",
      icon: <Binary className="h-8 w-8" />,
      description: "Verify asset information with expected asset port information",
      problem: "The app automatically verifies the asset information with the expected asset port information. The FTZ can now verify the asset information they have in their possession with yard asset information without calling the Distribution Center or security.",
      url: "https://ftzcheck.vercel.app/"
    },
    {
      title: "Security Operations Manual",
      icon: <Shield className="h-8 w-8" />,
      description: "Comprehensive security point guidelines",
      problem: "Security point responsibilities were not on hand. Training took too much time",
      url: "https://pincentryguide.vercel.app/"
    },
    {
      title: "Main Security Login Point",
      icon: <Lock className="h-8 w-8" />,
      description: "Zero-trust access management system",
      problem: "Centralized access control",
      url: "https://assetmgr.vercel.app/"
    },
    {
      title: "Audit Status Notification",
      icon: <Eye className="h-8 w-8" />,
      description: "Containers are proactively audited as soon as a notiification is received on entry into the yard & PINC",
      problem: "the problem of the FTZ detecting PINC entry issues firstand not security. There was a need for a proactive approach",
      url: "https://orderstatus.vercel.app/"
    },
    
    {
      title: "Container Check In/Out",
      icon: <Network className="h-8 w-8" />,
      description: "Wizard like interface to check in/out containers",
      problem: "Problematic workflow for container check in/out which aided lots of PINC entry issues.",
      url: "https://containercin.vercel.app/"
    },
    {
      title: "FTZ Image Search",
      icon: <Database className="h-8 w-8" />,
      description: "Secure Image data storage and search for image verification.",
      problem: "The FTZ can now verify the asset information they have in their possession with yard asset information without calling the Distribution Center or security.",
      url: "https://ftzimagesearch.vercel.app/"
    },
    {
      title: "Daily Guard Activity Reports",
      icon: <Cloud className="h-8 w-8" />,
      description: "Reports of daily guard activity",
      problem: "The reports were not always up to date. There was a need for a system to track the activity of the daily guards.",
      url: "https://dailyar.vercel.app/reports"
    },
    {
      title: "Temp Employee Verification",
      icon: <Binary className="h-8 w-8" />,
      description: "Employement agencies add/remove expected employees for the week to the system in realtime. Employee entrance guards verify this information against their Identification in realtime.",
      problem: "Employee entrance guards issued badges to temporary employees using printouts issued by hiring agencies. These changed quite often and were not always up to date.",
      url: "https://caleresbadges.vercel.app/employees"
    },
    {
      title: "Temp Badge Tracking",
      icon: <UserCheck className="h-8 w-8" />,
      description: "Identity verification and badge management",
      problem: "Unreturned badges were a security risk if not tracked. Manual tracking was cumbersome and not always up to date.",
      url: "https://badgenew.vercel.app/"
    },
    {
      title: "The Back Channel",
      icon: <AlertTriangle className="h-8 w-8" />,
      description: "Anonymous reporting of security issues.",
      problem: "Sensitive issues that required immediate action were not being reported especially when those reporting needed to be anonymous.",
      url: "https://anonyfeedback.vercel.app/"
    },
    {
      title: "Driver's License Scanner",
      icon: <FileSearch className="h-8 w-8" />,
      description: "Scan and capture driver's license ID and Name",
      problem: "Wrong driver's license information capture.",
      url: "https://licensecannner.vercel.app/"
    },
    {
      title: "Incident Reporting System",
      icon: <Shield className="h-8 w-8" />,
      description: "Report security incidents to the system",
      problem: "There was a need for a system to track and report security incidents.",
      url: "https://incidentreports.vercel.app/"
    }
  ];

  return (
    <Layout className="min-h-screen">
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Centralized Security Hub
          </h1>
          <p className="mt-4 text-xl text-center text-blue-200">
            Comprehensive solutions for security management
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <a 
              key={solution.title} 
              href={solution.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card 
                hoverable
                className="h-full"
                extra={<Badge color="blue" text="Enterprise" />}
              >
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-xl font-semibold ml-3">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Addresses:</strong> {solution.problem}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
      <Footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                Here to serve your security needs.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
              <Space direction="vertical" className="text-gray-400">
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> 
                </span>
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> +1 (949) 381-9944
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Irvine, CA
                </span>
              </Space>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <Space direction="vertical" className="text-gray-400">
                <a href="#" className="hover:text-blue-400">Documentation</a>
                <a href="#" className="hover:text-blue-400">Support</a>
                <a href="#" className="hover:text-blue-400">Pricing</a>
                <a href="#" className="hover:text-blue-400">Partners</a>
              </Space>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
              <Space className="text-gray-400">
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Github className="h-6 w-6" />
                </a>
              </Space>
            </div>
          </div>
          <Divider className="border-gray-700" />
          <div className="text-center text-gray-500">
            © 2024 Security Solutions Hub. All rights reserved.
          </div>
        </div>
      </Footer>
      </Layout>
  );
};

export default SecurityHub;