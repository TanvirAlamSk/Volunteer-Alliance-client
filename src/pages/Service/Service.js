import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const selectService = useLoaderData()
    console.log(selectService)
    return (
        <div className='w-5/6 mx-auto my-10'>
            <div className='w-full mx-auto'>
                <PhotoProvider>
                    <PhotoView src={selectService.image} className="w-20">
                        <img className='inline-block' src={selectService.image} alt="" srcSet="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <h2 className='text-3xl font-bold my-5'>{selectService.service}</h2>
            <p className='text-lg md:mx-16'>
                {selectService.description}
            </p>

        </div>
    );
};

export default Service;