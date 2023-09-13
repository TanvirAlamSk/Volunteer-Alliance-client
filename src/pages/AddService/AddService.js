import React, { useEffect } from 'react';

const AddService = () => {
    return (
        <div className="px-2  mb-10">
            <div className="flex flex-no-wrap items-start">
                <div className="w-full ">
                    <div className=" px-2">
                        <div className="bg-white rounded shadow mt-7 ">
                            <div className=" px-7">
                                <p className="text-xl font-semibold leading-tight text-gray-800">
                                    Add New Product
                                </p>
                                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">

                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Service Name
                                        </p>
                                        <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        <p className="mt-3 text-xs leading-3 text-gray-600">
                                            Set a simple and precise service name
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Service Image Link
                                        </p>
                                        <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                            Set photo that are related to the Service
                                        </p>
                                    </div>
                                    {/* <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Meta Title
                                        </p>
                                        <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        <p className="mt-3 text-xs leading-3 text-gray-600">
                                            Set a simple and precise meta title
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Meta Keywords
                                        </p>
                                        <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                            Set words that are related to the product
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="pt-6 border-gray-300 mt-2 px-7">
                                <p className="text-base font-semibold leading-4 text-gray-800">
                                    Product Description
                                </p>
                                <div className="mt-10 border border-gray-300 rounded">
                                    <textarea
                                        className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                                        placeholder="Start typing here ..."
                                        defaultValue={" "}
                                    />
                                </div>
                            </div>
                            <p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
                                Enter service description for better understanding
                            </p>
                            <hr className="h-[1px] bg-gray-100 " />
                            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4 p-5">
                                <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                                    Cancel
                                </button>
                                <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;