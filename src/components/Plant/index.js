import React from 'react'
const Plant = ({ common_name, default_image, scientific_name, other_name }) => {

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
              {default_image === 0 ? (
                <h4>
                  no image to display
                </h4>
              ) : (
                <img src={default_image.small_url} class="card-img-top" alt="title" />
              )}
              <div className="card-body">
              <h5 className='title'>Name:{common_name}</h5>
              <h5> scientific_name:{scientific_name}</h5>
            </div>

        </div>
      </div>


  )
}

export default Plant