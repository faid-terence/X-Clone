import React, {useState, useRef} from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
import './PostShare.css'

export const PostShare = () => {
  // Set up state for image
  const [image, setImage] = useState(null);
  // Set up a reference to the file input element
  const imageRef = useRef();

  // Function to handle image upload
  const onImageChange = (event)=> {
    // Check if a file was selected
    if(event.target && event.target.files[0]){
      // Get the selected file
      let img = event.target.files[0];
      // Set the image state with a URL object of the selected image
      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }

  return (
    <div className="PostShare">
      {/* Display user's profile image */}
      <img src={ProfileImage} alt="" />
      <div>
        {/* Input for user to type their post */}
        <input type="text" name="" id="" placeholder="What's Happening"/>
        {/* Display icons for different post options */}
        <div className="postOptions">
          {/* Option to upload a photo */}
          <div className="option" style={{color:"var(--photo)"}} onClick={()=> imageRef.current.click()}>
            <UilScenery/>
            Photos
          </div>
          {/* Option to upload a video */}
          <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle/>
            Video
          </div>
          {/* Option to add location */}
          <div className="option" style={{color:"var(--location)"}}> 
            <UilLocationPoint/>
            Location
          </div>
          {/* Option to schedule post */}
          <div className="option" style={{color:"var(--schedule)"}}>
            <UilSchedule/>
            Schedule
          </div>
          {/* Button to submit post */}
          <button className='button ps-button'>Share</button>
          {/* Hidden file input to select an image */}
          <div style={{display: "none"}}>
            <input type="file" name="myImage" id="" ref={imageRef}onChange={onImageChange}/>
          </div>
        </div>  
        {/* Display selected image preview */}
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=> {
              setImage(null)
            }}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}
