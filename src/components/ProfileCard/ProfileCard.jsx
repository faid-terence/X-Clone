import React from 'react'
import Cover from '../../img/cover.jpg' // import the cover image
import Profile from '../../img/profileImg.jpg' // import the profile image
import './ProfileCard.css' // import the CSS styles for this component

export const ProfileCard = () => { // declare a functional component called ProfileCard
  return (
    <div className="ProfileCard"> {/* create a div with the class "ProfileCard" */}
        <div className="ProfileImages"> {/* create a div with the class "ProfileImages" */}
            <img src={Cover} alt="" /> {/* display the cover image */}
            <img src={Profile} alt="" /> {/* display the profile image */}
        </div>
        <div className="ProfileName"> {/* create a div with the class "ProfileName" */}
            <span>Terence Faid JABO</span> {/* display the profile name */}
            <span>Senior Software Engineer</span> {/* display the profile job title */}
        </div>

        <div className="followStatus"> {/* create a div with the class "followStatus" */}
            <hr /> {/* display a horizontal line */}
            <div> {/* create a nested div */}
                <div className="follow"> {/* create a div with the class "follow" */}
                    <span>7,908</span> {/* display the number of followers */}
                    <span>Followers</span> {/* display the text "Followers" */}
                </div>
                <div className="vl"></div> {/* display a vertical line */}
                <div className="follow"> {/* create another div with the class "follow" */}
                    <span>1</span> {/* display the number of followings */}
                    <span>Followings</span> {/* display the text "Followings" */}
                </div>
            </div>
            <hr /> {/* display another horizontal line */}
        </div>
        <span>My Profile</span> {/* display the text "My Profile" */}
    </div>
  )
}

