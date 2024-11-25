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
      title: "CloudArmor",
      icon: <Cloud className="h-8 w-8" />,
      description: "Cloud infrastructure security",
      problem: "Cloud misconfigurations",
      url: "https://cloudarmor.sec"
    },
    {
      title: "Temp Employee Verification",
      icon: <Binary className="h-8 w-8" />,
      description: "Employement agencies add/remove expected employees for the week to the system in realtime. Employee entrance guards verify this information against their Identification in realtime.",
      problem: "Employee entrance guards issued badges to temporary employees using printouts issued by hiring agencies. These changed quite often and were not always up to date.",
      url: "https://caleresbadges.vercel.app/employees"
    },
    {
      title: "IdentityForge",
      icon: <UserCheck className="h-8 w-8" />,
      description: "Identity verification and management",
      problem: "Identity theft",
      url: "https://identityforge.sec"
    },
    {
      title: "RiskRadar",
      icon: <AlertTriangle className="h-8 w-8" />,
      description: "Security risk assessment platform",
      problem: "Risk visibility",
      url: "https://riskradar.sec"
    },
    {
      title: "Driver's License Scanner",
      icon: <FileSearch className="h-8 w-8" />,
      description: "Scan and capture driver's license ID and Name",
      problem: "Wrong driver's license information capture.",
      url: "https://licensecannner.vercel.app/"
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