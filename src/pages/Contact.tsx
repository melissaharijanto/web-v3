import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import ContactComponent from '../components/ContactComponent';

const Contact: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 md:p-16 lg:p-24 ">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>CONTACT</span>
      </div>
      <ContactComponent />
    </div>
  );
};

export default Contact;
