import React from "react";
import Marquee from "react-fast-marquee";
const Brand = () => {
  return (
    <div className="layout bg-purple-50">
      <Marquee >
        {/* ====== Brands Section Start */}

        <section className=" py-6 dark:bg-dark lg:py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="flex  items-center justify-center">
                  
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Brands Section End */}
      </Marquee>
    </div>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center 2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};
