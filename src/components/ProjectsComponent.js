import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import jimmy from "../assets/projects/JIMMY RESIDENCE/1.jpg";
import jimmy2 from "../assets/projects/JIMMY RESIDENCE/2.jpg";
import jimmy3 from "../assets/projects/JIMMY RESIDENCE/3.jpg";

import roccation1 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-01.jpg";
import roccation2 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-02.jpg";
import roccation3 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-03.jpg";
import roccation4 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-04.jpg";
import roccation5 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-05.jpg";
import roccation6 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-06.jpg";
import roccation7 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-07.jpg";
import roccation8 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-08.jpg";
import roccation9 from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-09.jpg";
import andrew1 from "../assets/projects/ANDREW RESIDENCE/1.jpg";
import andrew2 from "../assets/projects/ANDREW RESIDENCE/2.jpg";
import ramos from "../assets/projects/RAMOS KITCHEN/1-01.jpg";
import ramos2 from "../assets/projects/RAMOS KITCHEN/2-01.jpg";
import cameroon1 from "../assets/projects/CAMEROON REMODEL/Cameroon-01.jpg";
import cameroon2 from "../assets/projects/CAMEROON REMODEL/Cameroon-02.jpg";
import cameroon3 from "../assets/projects/CAMEROON REMODEL/Cameroon-03.jpg";
import cameroon4 from "../assets/projects/CAMEROON REMODEL/Cameroon-04.jpg";
import cameroon5 from "../assets/projects/CAMEROON REMODEL/Cameroon-05.jpg";
import cameroon6 from "../assets/projects/CAMEROON REMODEL/Cameroon-06.jpg";
import cameroon7 from "../assets/projects/CAMEROON REMODEL/Cameroon-07.jpg";
import cameroon8 from "../assets/projects/CAMEROON REMODEL/Cameroon-08.jpg";
import cameroon9 from "../assets/projects/CAMEROON REMODEL/Cameroon-09.jpg";
import cameroon10 from "../assets/projects/CAMEROON REMODEL/Cameroon-10.jpg";
import cameroon11 from "../assets/projects/CAMEROON REMODEL/Cameroon-11.jpg";
import cameroon12 from "../assets/projects/CAMEROON REMODEL/Cameroon-12.jpg";
import raya1 from "../assets/projects/RAYA BACKYARD/1.jpg";
import raya2 from "../assets/projects/RAYA BACKYARD/2.jpg";
import raya3 from "../assets/projects/RAYA BACKYARD/3.jpg";
import raya4 from "../assets/projects/RAYA BACKYARD/4.jpg";
import raya5 from "../assets/projects/RAYA BACKYARD/5.jpg";
import chairman1 from "../assets/projects/CHARMAINE RESIDENCE/1.jpg";
import chairman2 from "../assets/projects/CHARMAINE RESIDENCE/2.jpg";
import deric1 from "../assets/projects/DERRIK ADDITION/16031 BURKE AVE. ADDITION - 10-10-22-01.jpg";
import deric2 from "../assets/projects/DERRIK ADDITION/16031 BURKE AVE. ADDITION - 10-10-22-02.jpg";
import deric3 from "../assets/projects/DERRIK ADDITION/16031 BURKE AVE. ADDITION - 10-10-22-03.jpg";
import deric4 from "../assets/projects/DERRIK ADDITION/16031 BURKE AVE. ADDITION - 10-10-22-04.jpg";
import deric5 from "../assets/projects/DERRIK ADDITION/16031 BURKE AVE. ADDITION - 10-10-22-05.jpg";
import chris1 from '../assets/projects/CHRIS BEDROOM & BATH/1.jpg';
import chris2 from '../assets/projects/CHRIS BEDROOM & BATH/2.jpg';
import chris3 from '../assets/projects/CHRIS BEDROOM & BATH/3.jpg';
import ryan1 from '../assets/projects/RYAN RESIDENCE/1.jpg';
import ryan2 from '../assets/projects/RYAN RESIDENCE/2.jpg';
import ryan3 from '../assets/projects/RYAN RESIDENCE/3.jpg';
import ryan4 from '../assets/projects/RYAN RESIDENCE/4.jpg';
import ryan5 from '../assets/projects/RYAN RESIDENCE/5.jpg';
import ryan6 from '../assets/projects/RYAN RESIDENCE/6.jpg';
import rosan1 from '../assets/projects/ROSSANE RENOVATION/1.jpg';
import rosan2 from '../assets/projects/ROSSANE RENOVATION/2.jpg';
import rosan3 from '../assets/projects/ROSSANE RENOVATION/3.jpg';
import kain1 from '../assets/projects/KAIN RESIDENCE/1.jpg'
import kain2 from '../assets/projects/KAIN RESIDENCE/2.jpg'
import kain3 from '../assets/projects/KAIN RESIDENCE/3.jpg'
import kain4 from '../assets/projects/KAIN RESIDENCE/4.jpg'


function ProjectsComponent() {
  const images = [
    [jimmy, jimmy2, jimmy3],
    [
      roccation1,
      roccation2,
      roccation3,
      roccation4,
      roccation5,
      roccation6,
      roccation7,
      roccation8,
      roccation9,
    ],
    [andrew1, andrew2],
    [ramos, ramos2],
    [
      cameroon1,
      cameroon2,
      cameroon3,
      cameroon4,
      cameroon5,
      cameroon6,
      cameroon7,
      cameroon8,
      cameroon9,
      cameroon10,
      cameroon11,
      cameroon12,
    ],
    [raya1, raya2, raya3, raya4, raya5],
    [chairman1, chairman2],
    [deric1, deric2, deric3, deric4, deric5],
    [chris1 , chris2 , chris3],
    [ryan1 , ryan2, ryan3,ryan4, ryan5 , ryan6 ],
    [rosan1 , rosan2 , rosan3],
    [kain1 , kain2, kain3, kain4]
    
  ];

  const imageLabels = [
    ["JIMMY RESIDENCE"],
    ["ROCCATANI RESIDENCE"],
    ["ANDREW RESIDENCE"],
    ["RAMOS KITCHEN"],
    ["CAMEROON REMODEL"],
    ["RAYA BACKYARD"],
    ["CHARMAINE RESIDENCE"],
    ["DERIK ADDITION"],
    ["CHRIS BEDROOM & BATH"],
    ["RYAN RESIDENCE"],
    ["ROSSANE RENOVATION"],
    ["KAIN RESIDENCE"]
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  const handleImageClick = (itemIndex, index) => {
    setIsOpen(true);
    setCurrentItemIndex(itemIndex);
    setPhotoIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="sm:text-center my-14">
        <div className="sm:m-auto sm:w-[500px]">
          <div className="w-auto h-auto">
            <h2 className="mb-3 fontstyle m-4 text-left text-[27px] sm:text-[31px] md:text-[50px] textstyle mt-9 font-extrabold text-[#1d2434] sm:text-center lg:text-5xl">
              OUR BEST PROJECTS
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 m-5 lg:m-32 gap-4 md:grid-cols-2 sm:grid-cols-1 md:m-8">
          {isOpen && currentItemIndex !== null && (
            <Lightbox
              mainSrc={images[currentItemIndex][photoIndex]}
              nextSrc={
                images[currentItemIndex][
                  (photoIndex + 1) % images[currentItemIndex].length
                ]
              }
              prevSrc={
                images[currentItemIndex][
                  (photoIndex + images[currentItemIndex].length - 1) %
                    images[currentItemIndex].length
                ]
              }
              onCloseRequest={handleClose}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + images[currentItemIndex].length - 1) %
                    images[currentItemIndex].length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex(
                  (photoIndex + 1) % images[currentItemIndex].length
                )
              }
            />
          )}
          {images.map((itemImages, itemIndex) => (
            <div
              key={itemIndex}
              className="cursor-pointer relative"
              onClick={() => handleImageClick(itemIndex, 0)}
            >
              <img
                src={itemImages[0]}
                alt={`carousel-${itemIndex + 1}`}
                className="w-full h-[20rem]"
              />
              <div className="absolute inset-0 flex items-start justify-center opacity-0 hover:opacity-100 h-full w-full transition-opacity duration-300">
                <div className="text-white text-lg font-bold bg-black py-24 h-20 md:h-40 lg:h-64 bg-opacity-70 px-4 flex w-[100%] justify-center items-center">
                  <span className="border p-2 w-24 mx-5">View</span>
                </div>
              </div>
              <div className="mt-2 flex flex-col text-left fontstyle font-semibold">
                <h2 className="text-lg font-extra-light fontstyle font-semibold">
                  {imageLabels[itemIndex][0]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
