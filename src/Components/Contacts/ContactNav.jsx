// import React from 'react'

const ContactNav = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-[2rem] px-[4rem] py-[1rem] bg-[white] max-md:flex-col max-md:items-start max-md:py-[2rem]">
        <div className="flex items-center gap-[1rem]">
          <p className="text-[2.5rem] font-normal">Contacts</p>
        </div>
        <div className="flex items-center gap-[2rem] max-sm:flex-col max-sm:items-start">
          <p className="text-[1.6rem] font-normal text-[grey]">
            Template Messaging Tier
          </p>
          <p className="text-[1.6rem] font-normal">
            Tier <span className="font-normal">0</span> (2/24 Hours)
          </p>
          <p className="text-[1.6rem] text-[grey] font-normal">
            Remaining Quota
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactNav;
