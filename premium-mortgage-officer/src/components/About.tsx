import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Brandon Rhodehouse" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Brandon Rhodehouse
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Brandon brings more than two decades of financial expertise to his role as Mortgage Advisor at Patriot Mortgage, where he joined the team in October 2023. With 22 years in the financial industry and certifications including CMA and CCA, Brandon has built a career rooted in trust, leadership, and results.
              </p>
              <p>
                Throughout his career, Brandon has served in key leadership roles such as Vice President of Retail Banking at Washington Federal and Senior Trust Officer at the Bank of Idaho. These experiences have equipped him with deep knowledge of banking, lending, and financial strategy, allowing him to assist thousands of clients across Southeast Idaho with confidence and clarity.
              </p>
              <p>
                Beyond his professional accomplishments, Brandon is deeply committed to his community. He has served on multiple regional boards, with a special passion for Junior Achievement of Eastern Idaho. Through this organization, he helps teach financial literacy to students from kindergarten through 12th grade. Seeing those students grow into confident, college-bound young adults is one of the most rewarding parts of his journey.
              </p>
              <p>
                At home, Brandon has been happily married for 19 years and is a proud father of three. His household also includes several cats that help keep the mice away and one loyal dog. When he is not helping clients secure their future, you will likely find him coaching youth basketball or fishing with his wife along the South Fork of the Snake River. For Brandon, mortgage advising is not just about financing homes. It is about guiding families toward long-term stability and opportunity.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">20+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in ID</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
