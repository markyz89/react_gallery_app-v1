import React from 'react';

// taking all the props from photocontainer and making an image from them
const Photo = (props) => {
    let farmId=props.farmId
    let id = props.id
    let secret = props.secret
    let serverId = props.serverId
    return (
      <li>
        <img src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" />
      </li>
    )
  }

export default Photo;