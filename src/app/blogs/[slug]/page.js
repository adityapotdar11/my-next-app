import Image from 'next/image';
import * as blogs from '../../../../data/blogs.json';

export async function generateMetadata({ params }) {
    // read route params
    const { slug } = await params;

    // Get the current blogs JSON data (array of objects)
    const blogsData = blogs.default ? blogs.default : blogs;

    // Check if slug exists in blogs data
    const blogExists = blogsData.some((blog) => blog.slug === slug);

    const blog = blogsData.find((blog) => blog.slug === slug);

    // If the blog does not exist, return a not found metadata
    if (!blogExists) {
        return {
            title: 'Blog not found',
            description: 'The blog you are looking for does not exist.',
        };
    }

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            images: [blog.image || ''],
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    // Get the current blogs JSON data (array of objects)
    const blogsData = blogs.default ? blogs.default : blogs;

    // Check if slug exists in blogs data
    const blogExists = blogsData.some((blog) => blog.slug === slug);

    const blog = blogsData.find((blog) => blog.slug === slug);

    if (!blogExists) {
        return (
            <div>
                <h1>Blog not found</h1>
                <p>The blog you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-4 py-10">
            <h1 className="text-primary mb-2 font-bold">{blog.title}</h1>
            <p className="mb-6 text-lg text-gray-600">{blog.description}</p>
            {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="mb-8 h-64 w-full rounded-lg object-cover"
                />
            )}
            <div className="space-y-12">
                {blog.sections &&
                    blog.sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center gap-6 md:flex-row md:items-start ${
                                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}
                        >
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    height={200}
                                    width={600}
                                    className="h-48 w-full rounded-lg object-cover shadow"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-secondary mb-2 font-semibold">
                                    {section.title}
                                </h2>
                                <p className="text-black-700">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
