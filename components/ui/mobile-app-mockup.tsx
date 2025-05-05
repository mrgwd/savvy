import React from "react";

const MobileAppPreview: React.FC = () => {
  return (
    <div className="relative mx-auto w-64 h-[500px] rounded-[40px] overflow-hidden border-[8px] border-gray-800 shadow-xl">
      <div className="absolute top-0 inset-x-0 h-[32px] bg-gray-800">
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-full"></div>
      </div>
      <div className="absolute bottom-2 inset-x-0 flex justify-center">
        <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <div className="w-full h-full bg-gradient-to-b from-savvy to-savvy-light p-1">
        {/* App Content */}
        <div className="relative h-full w-full rounded-3xl bg-gray-900 overflow-hidden">
          {/* App Header */}
          <div className="p-4 bg-savvy">
            <div className="flex justify-between items-center">
              <div className="text-savvy-accent text-xs font-semibold">9:41</div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-savvy-accent rounded-full"></div>
                <div className="w-3 h-3 bg-savvy-accent rounded-full"></div>
                <div className="w-3 h-3 bg-savvy-accent rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-savvy-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-2">
                <div className="text-xs text-gray-400">Good morning</div>
                <div className="text-sm font-medium text-white">Alex</div>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="mx-3 -mt-2 p-4 rounded-xl bg-gradient-to-r from-savvy-accent to-savvy-accent/70">
            <div className="text-xs text-savvy-light/70 font-medium">Total Balance</div>
            <div className="text-xl font-bold text-savvy-light">$3,586.22</div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center bg-white/20 rounded-lg px-2 py-1">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-2 h-2 text-savvy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <span className="text-xs ml-1 text-white">Send</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-lg px-2 py-1">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-2 h-2 text-savvy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <span className="text-xs ml-1 text-white">Request</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-4 mt-3">
            <div className="text-sm font-medium text-white mb-3">Recent Activity</div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-savvy-accent/30"></div>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="text-xs text-white">Coffee Shop</div>
                    <div className="text-xs text-gray-400">Today</div>
                  </div>
                  <div className="text-xs font-medium text-white">-$4.50</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-savvy border-t border-gray-800 flex justify-around items-center">
            {['Home', 'Cards', 'Stats', 'Profile'].map((item, i) => (
              <div key={i} className={`flex flex-col items-center ${i === 0 ? 'text-savvy-accent' : 'text-gray-500'}`}>
                <div className="w-5 h-5 rounded-full bg-current opacity-20"></div>
                <div className="mt-1 text-[8px]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPreview;