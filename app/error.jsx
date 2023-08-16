"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset, statusCode }) {
  <>{statusCode ? <p>{statusCode} error on server</p> : ""}</>;
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <></>;
}
