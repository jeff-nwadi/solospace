import React from 'react'
import { 
  Kanban, 
  Zap, 
  Receipt, 
  BarChart3, 
  Users, 
  Smartphone 
} from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Capture Leads",
    description: "Add clients to your pipeline, track communication, and never miss a follow-up opportunity for projects."
  },
  {
    number: "2",
    title: "Manage Projects",
    description: "Organize tasks, set deadlines, and keep all project files and notes in one unified workspace."
  },
  {
    number: "3",
    title: "Get Paid Fast",
    description: "Generate beautiful invoices in seconds and accept payments directly via Stripe to get paid faster."
  }
]

const features = [
  {
    title: "Visual Pipeline",
    description: "See exactly where every client is in your process with a simple drag-and-drop board.",
    icon: Kanban,
    color: "#2563EB"
  },
  {
    title: "Smart Follow-ups",
    description: "Get AI-powered reminders on when to check in with leads so they never go cold.",
    icon: Zap,
    color: "#F59E0B"
  },
  {
    title: "One-Click Invoicing",
    description: "Turn project hours into professional invoices instantly and track when they are viewed.",
    icon: Receipt,
    color: "#0D9488"
  },
  {
    title: "Revenue Dashboard",
    description: "Understand your income with clean charts showing monthly recurring revenue and cash flow.",
    icon: BarChart3,
    color: "#2563EB"
  },
  {
    title: "Client Portals",
    description: "Give clients a secure link to view their project status, pay invoices, and upload files.",
    icon: Users,
    color: "#0D9488"
  },
  {
    title: "Mobile Ready",
    description: "Manage your business on the go. Perfect for taking notes right after client meetings.",
    icon: Smartphone,
    color: "#F59E0B"
  }
]

const Features = () => {
  return (
    <section className='px-3 md:px-8 lg:px-24 py-16 md:py-24 bg-background'>
      {/* How It Works Section */}
      <div className='max-w-7xl mx-auto mb-24'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-2xl md:text-3xl font-medium text-[#1F2937] tracking-tight'>
            How Solospace Works
          </h2>
          <p className='text-[#6B7280] text-[15px] md:text-[16px] max-w-[260px] md:max-w-xl mx-auto'>
            From first contact to final payment in three simple steps.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 px-3 md:px-0 lg:px-0'>
          {steps.map((step) => (
            <div key={step.number} className='flex flex-col items-start text-start lg:items-center lg:text-center group'>
              <span className='text-5xl md:text-6xl font-black text-[#F59E0B] opacity-70 mb-6 block leading-none'>
                {step.number}
              </span>
              <h3 className='text-base md:text-xl font-bold text-[#1F2937] mb-3 subtitle'>
                {step.title}
              </h3>
              <p className='text-[#6B7280] text-[14px] md:text-[15px] leading-relaxed max-w-[290px] lg:max-w-none'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Everything You Need Section */}
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white rounded-[32px] p-8 md:p-16 lg:p-20 border border-gray-100'>
          <div className='text-center mb-16 md:mb-20'>
            <h3 className='text-xl lg:text-2xl font-bold text-[#1F2937] tracking-tight subtitle'>
              Everything you need. <br className='md:hidden' /> Nothing you don't.
            </h3>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-20'>
            {features.map((feature) => (
              <div key={feature.title} className='flex flex-col items-start text-start lg:items-center lg:text-center space-y-4'>
                <div 
                  className='p-2'
                  style={{ color: feature.color }}
                >
                  <feature.icon size={28} strokeWidth={2.5} />
                </div>
                <div className='space-y-2'>
                  <h4 className='text-lg font-bold text-[#1F2937]'>
                    {feature.title}
                  </h4>
                  <p className='text-[#6B7280] text-[14px] md:text-[15px] leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features