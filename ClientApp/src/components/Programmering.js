import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function getMaand(sum) {
  const today = new Date();
  const maandNamen = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "July", "Augustus", "September", "October", "November", "December"];
  if (today.getMonth()+sum > 11) {
    return maandNamen[today.getMonth()+sum-12]
  } else {
    return maandNamen[today.getMonth()+sum]
  } 
}



export class Programmering extends Component {
  render() {
    return (
      <div>
        <div className="placeholderTopField"></div>
        <div className='maanden'>
          {maandMomenten ? maandMomenten.map((momenten, index) => (
            <div key={index} className="maand">
              <b><p style={{fontSize: 35}}>{getMaand(index)}</p></b>
              <div style={{padding: 20}}>
                <Carousel responsive={responsive} centerMode={true}>
                {momenten ? momenten.map((moment, index) => {
                  return (
                    <div key={index} style={{height: 350, width: 220, textAlign: 'center', }}>
                      <div style={{height: 275, width: 220, backgroundColor: 'whitesmoke', boxShadow: '0px 0px 2px gray'}}>
                        <p>{moment.voorstelling.titel}</p>
                        <img src={moment.voorstelling.img} style={{height: 200, width: 200}}></img>
                        <p>{moment.dateTime}</p>
                        <p>{moment.zaal.zaalNr}</p>
                      </div>
                      <button>Lees Meer</button>
                    </div>
                  );
                }) : <div />}
                </Carousel>
              </div>
            </div>
          )):<div/>}
        </div>
      </div>
    )
  }
}
const responsive = {
  superLargeDesktop: {breakpoint: { max: 4000, min: 3000 }, items: 4},
  desktop: {breakpoint: { max: 3000, min: 1024 }, items: 3},
  tablet: {breakpoint: { max: 1024, min: 464 }, items: 2},
  mobile: {breakpoint: { max: 464, min: 0 }, items: 1}
};
//examplefetch
const maandMomenten =
[ 
  [
    {
      id: 1,
      dateTime:"19-12-2022 01:30:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 2,
      dateTime:"19-12-2022 02:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 3,
      dateTime:"19-12-2022 02:30:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 4,
      dateTime:"19-12-2022 02:30:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 5,
      dateTime:"19-12-2022 02:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    }
  ],
  [
    {
      id: 6,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 7,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 8,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 9,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 10,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    }
  ],
  [
    {
      id: 11,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 12,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 13,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 14,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "elvis",
        omschrijving: "elvis gaat zingen",
        img: "https://imgur.com/p6nUEDX.jpg",
      },
     zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    },
    {
      id: 15,
      dateTime:"19-12-2022 03:00:00", 
      voorstelling:{
        titel: "jan",
        omschrijving: "jan eet steen",
        img: "https://imgur.com/QJTWyqA.jpg",
      },
      zaal:
      { 
        zaalNr: "zaal 4",
        aantalstoelen1: 120,
        aantalstoelen2: 120,
        aantalstoelen3:20
      },
      betrokene: [
        {
          beschrijving:"Swerelds bestverkopende rock artiest! Elvis!",
          img: "https://imgur.com/5wQJZJ7.jpeg",
          geboortedatum: "10/10/2002"
        }
      ]
    }
  ]
]
export default Programmering;


