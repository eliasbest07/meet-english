import React from 'react'

function MyCard() {
  return (
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">FRONT SIDE</p>
          <p>Hover Me</p>
        </div>
        <div className="backSide">
          <p className="title">BACK SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>

      <style jsx>{`
       .myCard {
        background-color: transparent;
        width: 190px;
        height: 254px;
        perspective: 1000px;
      }
      
      .title {
        font-size: 1.5em;
        font-weight: 900;
        text-align: center;
        margin: 0;
      }
      
      .innerCard {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        cursor: pointer;
      }
      
      .myCard:hover .innerCard {
        transform: rotateY(180deg);
      }
      
      .frontSide,
      .backSide {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 1rem;
        color: white;
        box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
        font-weight: 700;
      }
      
      .frontSide,
      .frontSide::before {
        background: linear-gradient(43deg, rgb(25, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
      }
      
      .backSide,
      .backSide::before {
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
      }
      
      .backSide {
        transform: rotateY(180deg);
      }
      
      .frontSide::before,
      .backSide::before {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 110%;
        height: 110%;
        position: absolute;
        z-index: -1;
        border-radius: 1em;
        filter: blur(20px);
        animation: animate 5s linear infinite;
      }
      
      @keyframes animate {
        0% {
          opacity: 0.3;
        }
      
        80% {
          opacity: 1;
        }
      
        100% {
          opacity: 0.3;
        }
      }
      `}</style>
    </div>
  )
}

export default MyCard