import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext';

function Comment() {
    const context = useContext(allContext);
    const { mode } = context;





    return (
        <section className=" py-8 lg:py-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg lg:text-2xl font-bold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Write Review</h2>
                </div>
                <form className="mb-6">
                    <input type="text" placeholder='Your name' className="w-full text-sm  focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 border-gray-200 shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] py-2.5 px-2 mb-2 border  rounded-lg" style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)' }} />
                    <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200 " style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)' }}>
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows={6} className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 " style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)' }} placeholder="Write a review..." required defaultValue={""} />
                    </div>
                    <Button style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                        Post
                    </Button>
                </form>
                <article className="p-6 mb-6 text-base rounded-lg " style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)' }}>
                    {/* {allComment.map((i,index) => {
                        return (
                            <> */}
                    <footer className="flex justify-between items-center mb-">
                        <div className="flex items-center my-2 bg-white p-1 rounded-lg ">
                            <p className="inline-flex items-center mr-3 text-lg  " style={{ color: mode === 'dark' ? 'black' : 'black' }}>
                                <img className="mr-2 w-7 h-7 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/images%2FIMG_20230617_183647.png?alt=media&token=01182972-e6b2-4c0e-b74e-91a9b76eb69c" alt="Michael Gough" />
                                Kamal Nayan</p>
                            <p className="text-sm " style={{ color: mode === 'dark' ? 'black' : 'black' }}>{"July 15, 2023"}</p>
                        </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400 text-md" style={{ color: mode === 'dark' ? 'white' : 'black' }}>↳{"Nice Product"}</p>
                    {/* )
                    })} */}
                </article>

            </div>
        </section>
    )
}

export default Comment