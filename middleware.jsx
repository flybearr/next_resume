import { NextResponse } from "next/server";
const allowOrigins = ["http://localhost:3000", "http://localhost:5555"];

export function middleware(request) {
  // console.log(request.headers + "  middleWare");

  const origin = request.headers.get("origin");

  // const { pathname, searchParams } = request.nextUrl;
  if (origin && !allowOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Forbidden",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return NextResponse.next();
}

// 預設 匹配路由
// export const config = {
//   matcher: ["/post", "/fw"],
// };
