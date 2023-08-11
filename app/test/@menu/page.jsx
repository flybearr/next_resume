import React from "react";
const url = "https://jsonplaceholder.typicode.com/posts?_limit=100";
const GET = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const getFromRoute = async () => {
  const res = await fetch("http://localhost:3000/api/jsonplaceholder");
  return res;
};

export default async function Menu() {
  const data = await GET();
  let response;
  getFromRoute()
    .then((data) => data.json())
    .then((res) => {
      response = res;
    });

  console.log(response);
  return (
    <div className="w-full h-full">
      {data?.map((v) => {
        return (
          <div key={v.id}>
            <p>{v.title}</p>
            <p>{v.body}</p>
          </div>
        );
      })}
    </div>
  );
}
