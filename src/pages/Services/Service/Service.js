import React from 'react';

const Service = ({ service }) => {
    const { image, description } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl text-black text-left">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.service}</h2>
                <p>{description.split(" ").slice(0, 20).join(" ")}</p>
                <div className="card-actions ">
                    <button className="btn btn-outline btn-success font-bold">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;