"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>{error?.message}</h1>
      <button onClick={() => reset()}>try</button>
    </div>
  );
}
