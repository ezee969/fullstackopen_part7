import React from 'react';

export default function SideHero() {
  return (
    <div
      className=" flex items-center justify-center
                  px-3 py-2
                  bg-gradient-to-r from-pink-400 to-indigo-400
                  md:px-12
                  lg:px-16
                  xl:px-18 xl:rounded-r 
                    "
    >
      <h4 className=" font-semibold text-sm md:text-base xl:text-lg text-white text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim officiis odio,
        vel recusandae cum modi porro? Iusto quaerat distinctio exercitationem
        perferendis rem repellendus modi vitae quas a. Fugit non similique itaque
        velit necessitatibus vero quae sapiente, soluta, reprehenderit doloribus
        architecto eaque omnis eveniet perspiciatis iusto nulla corrupti veniam
        veritatis quia.
      </h4>
    </div>
  );
}
