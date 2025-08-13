import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as blogs from '../../../data/blogs.json';

const page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.default.map((blog, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow-lg"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={300}
                            className="h-60 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="mb-2 text-xl font-bold">
                                {blog.title}
                            </h2>
                            <p className="mb-4 text-gray-600">
                                {blog.description}
                            </p>
                            <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
