import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import FormInput from '../Components/FormInput';

function Index(props) {
  return (
    <>
      <FormInput style={{ zIndex: 999 }} />
      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
    </>
  );
}

export default Index;
