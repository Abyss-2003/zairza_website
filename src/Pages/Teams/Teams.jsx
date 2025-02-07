import React from 'react'
import "../../styles/common.style.scss";
import Card from '../../Components/Card/Card'

const Teams = () => {
    const alumniData=[
        {
            detailNo:1,
            img:require("../../Assets/images/blogs-details-img-1.png"),
            title: "Gunjan Giri",
            desc: "Coordinator",
        },
        {
            detailNo:2,
            img:require("../../Assets/images/blogs-details-img-1.png"),
            title: "Gunjan Giri",
            desc: "Coordinator",
        },
        {
            detailNo:3,
            img:require("../../Assets/images/blogs-details-img-1.png"),
            title: "Gunjan Giri",
            desc: "Coordinator",
        },
        {
            detailNo:4,
            img:require("../../Assets/images/blogs-details-img-1.png"),
            title: "Gunjan Giri",
            desc: "Coordinator",
        }
     ]
  return (
    <div className='event__container'>
        <div className="alumni_top_box">
            <h1 className="alumni_heading">Lets Meet Our Team</h1>
            <p className='alumni_para'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi officiis laboriosam quaerat explicabo repellendus dolores vero laudantium at aliquid velit voluptas iusto optio repudiandae nemo reprehenderit, corrupti asperiores doloribus illo soluta dolore? Illo libero ipsa illum voluptate, exercitationem eum harum nesciunt praesentium, odit modi, recusandae fugiat possimus error. Autem fuga mollitia quia a omnis nihil maxime aperiam assumenda aspernatur ullam impedit rem, voluptas esse molestiae, ab ea culpa praesentium unde. Quidem magni quibusdam et quasi consectetur dolor hic quaerat beatae!
            </p>     
        </div>
        <div className="alumni_card">
        {alumniData.map((details,id)=>{
            return <Card data={details} key={id} width="270px" height="360px" alumniBackground="#00255C" borderBottomLeft="none" borderBottomRight="none" alumniColor="white" />
        })}
        </div>
    </div>
  )
}

export default Teams