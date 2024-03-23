import { useEffect, useState } from "react";
import Head from 'next/head'
export default function Home() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <Head>
        <title>Boldog születésnapot!</title>
        <meta name="description" content="Electro Netics Kft. Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <main>
        macska
      </main>
    </>
  )
}
