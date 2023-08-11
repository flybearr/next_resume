"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      {/* <h1>{JSON.stringify(error)}</h1> */}
      {/* <button onClick={() => reset()}>try</button> */}
    </>
  );
}
