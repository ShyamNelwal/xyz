import React from 'react'
import './Events.css'
import { Container } from 'react-bootstrap'
import Cards from '../Cards/Cards'
import Metadata from '../MetaData/MetaData'
import eventImage1 from '../../images/events/1.jpg'
import eventImage2 from '../../images/events/2.jpg'
import eventImage3 from '../../images/events/3.jpg'
import eventImage4 from '../../images/events/4.jpg'

const eventsList =
  [
    {
      "title": "Parva",
      "img": eventImage1,
      "desc": "Parva is the flagship event organised by kannada Vedike on the occasion of kannada rajyotsava. It is true bliss for the eye to witness this spectacular colorful event that include ___. A grand program is hosted in SJA with a prominent figure with remarkable contribution to the society in his/her field as chief guest. Quizzes, essay competitions, drawings, rangoli competition and many more activities are held a week before the event and winners are awarded with prizes on the day of parva celebration.",
      "link": "#"
    },
    {
      "title": "Ethnic Day",
      "img": eventImage2,
      "desc": "To showcase the different cultures of students hailimg from various part of the nation. This event events provides a platform to uphold the principle of unity in diversity",
      "link": "#"
    },
    {
      "title": "Bharat Darshan",
      "img": eventImage3,
      "desc": "Bharat Darshan is an iconic competition conducted by DDFC NITK. Students participate in this cultural Marvel representing their homeland art, fests, dressings and culture proudly infront of the whole student community. This event brings appreciation for diverse culture of India.",
      "link": "#"
    },
    {
      "title": "Hudugata Hudukata",
      "img": eventImage4,
      "desc": "The first major event conducted by kannada Vedike exclusively for 1st year students of b.tech as well as m.tech. As name suggests hudugata hudukata involves freshers forming their groups and searching for clues hidden at various places inside nitk campus. This event enables freshers to group together with new people and discover places by solve challenging and fun riddles",
      "link": "#"
    }
  ];

const Events = () => {
  return (
    <>
      <Metadata title="Events | Kannada Vedike" />
      <div className="page">
        <h2 className="text-center font-weight-bold primary-text-clr title pt-5"> Events</h2>
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

export default Events