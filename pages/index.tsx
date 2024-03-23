import { useEffect, useState } from "react";
import Head from 'next/head'
import BeforeBirthday from "@/Components/beforeBirthday/BeforeBirthday";
import AfterBirthDay from "@/Components/afterBirthday/AfterBirthDay";
import icon from '@/assets/icon/birthdayIcon.svg';

export default function Home() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect( () => {
    
    const target = new Date("06/06/2024 23:59:59");
    //const target = new Date("03/21/2024 17:11:30");
    
    const interval = setInterval( () => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setDays(d); setHours(h); setMinutes(m); setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    } , 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Boldog születésnapot!</title>
        <meta name="description" content="Electro Netics Kft. Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <main>
        {partyTime ? 
          <AfterBirthDay /> : 
          <BeforeBirthday days={days} hours={hours} minutes={minutes} seconds={seconds} />
        }
      </main>
    </>
  )
}
