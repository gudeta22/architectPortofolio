import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModernDesign1 from "../assets/projects/ModernDesign/Modern1.jpg";
import ModernDesign2 from "../assets/projects/ModernDesign/Modern2.jpg";
import ModernDesign3 from "../assets/projects/ModernDesign/Modern4.jpg";
import ModernDesign4 from "../assets/projects/ModernDesign/Modern1.jpg";
import Adu from "../assets/projects/ADU2/1.jpg";
import Adu2 from "../assets/projects/ADU2/2.jpg";
import Adu3 from "../assets/projects/ADU2/2.jpg";
import interior1 from "../assets/projects/interior design/design1.jpg";
import interior2 from "../assets/projects/interior design/design2.jpg";
import interior3 from "../assets/projects/interior design/design3.jpg";
import interior4 from "../assets/projects/interior design/design4.jpg";
import ADU from "../assets/projects/ADU/3._9 - Photo.jpg";
import ADU1 from "../assets/projects/ADU/3._6 - Photo.jpg";
function ProjectsComponent() {
  const images = [
    [ModernDesign1, ModernDesign2, ModernDesign3, ModernDesign4],
    [Adu, Adu2, Adu3],
    [interior1, interior2, interior3, interior4],
    [ADU, ADU1],
    [ModernDesign3, ModernDesign2, ModernDesign3, ModernDesign4],
  ];

  const imageLabels = [
    ["Modern Designs", "Villa"],
    ["accessory dwelling unit (ADU) ", "Single Family Home"],
    ["INTERIOR DESIGNS", "Villa Homes"],
    ["accessory dwelling unit (ADU) ", "Family Homes"],
    ["Modern Designs", "Villa"],
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
    <div className="flex ">
      <div className=" sm:text-center my-14 ">
        <div className=" sm:m-auto sm:w-[500px]">
          {/* <div className=" flex items-center sm:justify-center sm:text-center ">
            <div className=" w-16 h-[2px]  mr-3 bg-slate-950 rounded-lg "></div>
            <p className="font-semibold tracking-wider text-[#292c37]  text-xl uppercase  ">
              our recent work
            </p>
          </div> */}
          <div className="w-auto h-auto">
            <h2 className="mb-3 fontstyle m-4 text-left text-[27px] sm:text-[31px] md:text-[50px] textstyle  mt-9 font-extrabold text-[#1d2434]  sm:text-center lg:text-5xl ">
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
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-start justify-center opacity-0 hover:opacity-100  h-full w-full transition-opacity duration-300">
                <div className="text-white text-lg font-bold bg-black py-24 h-20 md:h-40 lg:h-64 bg-opacity-70 px-4 flex w-[100%] justify-center items-center">
                  <span className="border  p-2 w-24 mx-5 ">View</span>
                </div>
              </div>
              <div className=" mt-2 flex flex-col text-left fontstyle font-semibold">
                <h2 className="text-lg font-extra-light fontstyle font-semibold">
                  {imageLabels[itemIndex][0]}
                </h2>
                <p className="text-gray-500 font-">
                  {imageLabels[itemIndex][1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
