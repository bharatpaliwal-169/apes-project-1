import React from 'react';

const Item = (props) => {
  return (
          <div class='col-5 col-sm-3'>
            {/* <div className="card" key={props.id} >
              <div className='card-body'> */}
                <img src={props.img} alt='{item.title}' className='img-fluid card-img-top mt-2 mb-2 p-2' />
              {/* </div>
            </div> */}
          </div>
        )
}
export default Item;