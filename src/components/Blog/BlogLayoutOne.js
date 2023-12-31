import React from 'react';
import Tag from '../Elements/Tag';
import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';

function BlogLayoutOne({blog}) {
    return (
        <div className='group inline-block overflow-hidden rounded-xl'>
              <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
                bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10'></div>
                <Image src={blog.image.filePath.replace("../public", '')}
                    placeholder='blur'
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all
                    duration-300' />

                <div className='w-full absolute bottom-0 p-10 z-20'>

                    <Tag className='px-6 text-sm py-2 !border' link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />

                    <Link href={blog.url} className='mt-6'>
                        <h2 className='font-bold capitalize text-2xl text-light mt-4'>
                            <span className='[text-shadow:_3px_3px_3px_rgb(0_0_0_/_100%)] bg-gradient-to-r from-white to-white bg-[length:0px_2px]
                           group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                                {blog.title}
                            </span>
                        </h2>

                    </Link>

                </div>
        </div>
    );
}

export default BlogLayoutOne;