import React from 'react';
import { Card, Badge } from 'antd';
import { Shield, Lock, Eye, Binary, Network, Database, Cloud, UserCheck, AlertTriangle, FileSearch } from 'lucide-react';

const SecurityHub = () => {
  const solutions = [
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
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Security Guard Solutions Hub
          </h1>
          <p className="mt-4 text-xl text-center text-blue-200">
            Comprehensive protection for modern enterprises
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
    </div>
  );
};

export default SecurityHub;