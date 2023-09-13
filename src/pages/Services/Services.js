import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='my-20'>
            <div className='py-10 bg-black text-white font-serif'>
                <h1 className='text-5xl'>Our various types of services</h1>
                <p className='md:mx-80 my-10'>Our interior design services helped bring our clients' visions to life by transforming their spaces. See how our experts transformed these interiors. </p>
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 w-full mx-auto'>
                {services.map((service) => <Service key={service._id} service={service}></Service>)}
                <div className="card card-compact bg-base-100 shadow-xl cursor-pointer ">
                    <div className="card-body flex justify-center items-center hover:text-slate-600 border-2">
                        <Link to="/addservice" className='block'>
                            <h2 className="card-title justify-center text-center text-9xl  text-slate-400">+</h2>
                            <button className=" btn text-center text-slate-400">Add More Service</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Services;