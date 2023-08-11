import { NextResponse } from "next/server";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts?_limit=100";
export const GET = async () => {
  const res = await axios.get(url);
  const data = await res.data;
  return new NextResponse(JSON.stringify(data));
};
