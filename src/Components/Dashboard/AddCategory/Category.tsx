import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='w-75'>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Category</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Category Name" />
                    <label htmlFor="floatingInput">Category Name</label>
                </div>
                <Link to='/dashboard/category-list'>
                    <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                        Add Category</div>
                </Link>
            </div>
            <div className="accordion w-25 mx-4 mt-5 pt-3" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            All Category
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Category Name ONE</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;


