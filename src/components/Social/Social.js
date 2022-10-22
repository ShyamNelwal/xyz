import React from 'react'
import './Social.css'
import { Container } from 'react-bootstrap'
import Cards from '../Cards/Cards'
import Metadata from '../MetaData/MetaData'
import socialImage1 from '../../images/social/1.jpg'
import socialImage2 from '../../images/social/2.jpg'
import socialImage3 from '../../images/social/3.jpg'

const eventsList =
    [
        {
            "title": "Plant Sapling",
            "img": socialImage1,
            "desc": "Initiative social event where students are encouraged to plant a sapling in their neighborhood and take care of it. Under the banner 'Vrukshotsava' this event is organised to emphasize on the vital role of plants and trees in our ecosystem.",
            "link": "#"
        },
        {
            "title": "Blood donation",
            "img": socialImage2,
            "desc": "Blood donation is an yearly social event fully organised by Kannada Vedike NITK. Through this event efforts are made on awareness about blood donation among young and healthy population and it's significance.",
            "link": "#"
        },
        {
            "title": "Help to Flood Victims",
            "img": socialImage3,
            "desc": "Karnataka saw a disastrous flood in the year 2019 affecting nearly 7 lakh people from 22 districts. In response to this, Kannada Vedike extended its helping hands to the flood Victims by raising funds from students.",
            "link": "#"
        }
    ];

const Social = () => {
    return (
        <>
            <Metadata title="Social Activities | Kannada Vedike" />
            <div className="page">
                <h2 className="text-center font-weight-bold primary-text-clr title pt-5"> Social Activities</h2>
                <div className="pageContainer content">
                    {
                        eventsList.map((event, idx) => {
                            return <Cards title={event.title} desc={event.desc} img={event.img} link={event.link} key={'e' + idx} ></Cards>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Social