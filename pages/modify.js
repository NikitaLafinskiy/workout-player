import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import FormInput from "../Components/FormInput";
import FormWrapper from "../Components/FormWrapper";
import Button from "../Components/Button";

function Index(props) {
  return (
    <>
      <FormWrapper>
        <h1>Options</h1>
        <div>
          <p>Two playlists</p>
          <input type='checkbox' />
        </div>

        <FormInput placeholder="The first playlist's link: " />
        <FormInput placeholder="The second playlist's link: " />
        <Button> Submit</Button>
      </FormWrapper>

      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
    </>
  );
}

export default Index;
