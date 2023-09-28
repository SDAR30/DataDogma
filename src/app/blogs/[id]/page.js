import { allBlogs } from "@/.contentlayer/generated"
import BlogDetails from "@/src/components/Blog/BlogDetails"
import RenderMdx from "@/src/components/Blog/RenderMdx"
import Tag from "@/src/components/Elements/Tag"
import Image from "next/image"

export default function BlogPage({ params }) {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.id)
    return (
        <article>
            <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2">
                    <Tag name={blog.tags[0]} link={`/categories/${blog.tags[0]}`}
                        className='px-6 text-sm py-2' />
                    <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal
                    relative w-5/6">
                        {blog.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
                    <Image src={blog.image.filePath.replace("../public", '')}
                        placeholder='blur'
                        blurDataURL={blog.image.blurhashDataUrl}
                        alt={blog.title}
                        width={blog.image.width}
                        height={blog.image.height}
                        className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all
                    duration-300' />
            </div>
            <BlogDetails blog={blog} id={params.id} />
            <div className="grid grid-cols-12 gap-16 mt-8 py-10">
                <div className="col-span-4">Toc</div>
                <RenderMdx blog={blog}/>
            </div>
        </article>
    )
}