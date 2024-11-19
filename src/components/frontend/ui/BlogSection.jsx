import React from 'react';

const BlogSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Read Our Blog</h2>
          <p className="mt-5 text-gray-600">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>

        <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
          {/* Blog Item 1 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-125"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png"
                alt="Blog 1"
              />
            </div>
            <p className="mt-6 text-sm text-gray-600">November 22, 2021</p>
            <p className="mt-4 text-xl font-bold text-gray-900">
              How To Optimize Progressive Web Apps: Going Beyond The Basics
            </p>
            <a href="#" title="Read more" className="absolute inset-0" aria-label="Read more about the blog"></a>
          </div>

          {/* Blog Item 2 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-125"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png"
                alt="Blog 2"
              />
            </div>
            <p className="mt-6 text-sm text-gray-600">November 16, 2021</p>
            <p className="mt-4 text-xl font-bold text-gray-900">
              How To Optimize Progressive Web Apps: Going Beyond The Basics
            </p>
            <a href="#" title="Read more" className="absolute inset-0" aria-label="Read more about the blog"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
