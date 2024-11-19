import Image from 'next/image';
import banner1 from '../../../../../public/frontend/banners/cause-12.webp';
import banner2 from '../../../../../public/frontend/banners/cause-13.webp';
import React from 'react';

const Banner1 = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center gap-12 px-4 lg:px-16 py-12">
      {/* Left Images */}
      <div className="relative flex-shrink-0 w-full lg:w-1/2">
        <div className="relative">
          <div className="w-3/5 lg:w-3/5">
            <Image
              src={banner1}
              alt="Elderly woman"
              className="rounded-lg shadow-lg"
              layout="responsive"
            />
          </div>
          <div className="absolute -bottom-24 right-8 w-2/3 lg:w-2/5">
            <Image
              src={banner2}
              alt="Smiling child"
              className="rounded-lg shadow-lg border border-gray-200"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-red-600 uppercase text-sm font-bold tracking-widest">
          World with Humanity
        </h3>
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Fundraising for the <span className="text-red-600">People Causes</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>
        <div className="space-y-4">
          <p className="font-bold text-gray-800">
            <span className="text-red-600">You Can Be a Part of Changes in the World</span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>
          <div className="flex items-center gap-6">
            <div className="bg-red-600 text-white font-bold text-2xl rounded-full flex items-center justify-center w-20 h-20 shadow-lg">
              4M+
            </div>
            <div>
              <p className="text-gray-800 font-bold text-lg">Total Donation</p>
              <ul className="space-y-2 text-gray-600 list-disc ml-5">
                <li>Organizations joined the Cause</li>
                <li>Facilities Prepared For Elders</li>
                <li>Clean Water and Save Life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
