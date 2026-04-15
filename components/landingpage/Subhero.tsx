import React from 'react'
import { FileSpreadsheet, CalendarClock, Receipt  } from "lucide-react"

const data =[
    {
        id:1,
        icons: FileSpreadsheet,
        title:"Scattered Details",
        description:"Notes in Apple Notes, tasks in Trello, invoices in Word. Finding client info takes longer than doing the work.",
        color:"#2563EB"
    },
    {
        id:2,
        icons: CalendarClock,
        title:"Missed Follow-ups",
        description:"You sent the proposal but forgot to check in. Leads slip through the cracks because you're too busy.",
        color:"#0D9488"
    },
    {
        id:3,
        icons: Receipt,
        title:"Late Payments",
        description:"Chasing down unpaid invoices is awkward and stressful. You just want to get paid for your great work.",
        color:"#EF4444"
    }
]

export default function Subhero() {
  return (
    <section className='px-6 md:px-8 lg:px-24 py-16 md:py-24 bg-background'>
        <div className='flex items-center justify-center text-center'>
            <div className=''>
                <h2 className='text-[#1F2937] text-2xl md:text-3xl font-medium tracking-tight max-w-[280px] md:max-w-xl mx-auto'>
                    Freelancing is hard enough.
                </h2>
                <p className='text-[#6B7280] mt-4 text-[15px] md:text-[16px] leading-relaxed max-w-[260px] md:max-w-xl mx-auto'>
                    Stop juggling five different tools to run your one-person business.
                </p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 md:mt-20 max-w-7xl mx-auto'>
            {data.map((item) => {
                const Icon = item.icons;
                return (
                    <div 
                        key={item.id} 
                        className='group flex flex-col justify-start items-start gap-6 bg-white p-8 md:p-10 rounded-[32px] border-l-[6px] transition-all hover:translate-y-[-4px]'
                        style={{ borderLeftColor: item.color }}
                    >
                        <div 
                            className='flex justify-center items-center p-3 rounded-xl bg-gray-50'
                            style={{ color: item.color }}
                        >
                            <Icon size={28} strokeWidth={2.5} />
                        </div>
                        
                        <div className='space-y-3'>
                            <h3 className='text-xl font-bold text-[#1F2937] subtitle'>{item.title}</h3>
                            <p className='text-[#6B7280] text-[15px] leading-relaxed'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  )
}
