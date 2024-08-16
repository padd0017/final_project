import "dotenv/config";
import d from "debug";
import { NextResponse } from "next/server";

const ekam = d("app:crapRoute");


export async function GET(request) {
  // const {searchParams}=new URL(request.url)
  // ekam({searchParams})
  // ekam({req:request.url})

  const { searchParams } = new URL(request.url);
  let keyword = searchParams.get("keyword");
  let distance = searchParams.get("distance");
  let long = searchParams.get("long");
  let lat = searchParams.get("lat");
  long = Number(long);
  lat = Number(lat);

  ekam({ keyword, distance, long, lat });

  let url = `http://localhost:4000/api/crap/?distance=${distance}&keyword=${keyword}&long=${long}&lat=${lat}`;

  let jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjMmY1MWIxNzZiOTRkYjYyNWZkOGUiLCJuYW1lIjoiRWthbSBTaW5naCIsImdvb2dsZUlkIjoiMTA1NzY5MTM2NTU1ODUxMzI0NTcyIiwiY3JlYXRlZEF0IjoiMjAyNC0wOC0xNVQwMzowNDo1NS4xMzBaIiwidXBkYXRlZEF0IjoiMjAyNC0wOC0xNVQwMzowNDo1NS4xMzBaIiwiaWF0IjoxNzIzNjkxMDk1LCJleHAiOjE3MjM3Nzc0OTV9.-NUAjtqu6kpJGpNr2Pdv74e3W6as_iK5fHj0_YQWAL0";
  const api = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });

  const data = await api.json();

  return NextResponse.json({ data: data.data });
}
