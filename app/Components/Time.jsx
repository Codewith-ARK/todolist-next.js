import { useEffect, useState } from 'react'

export default function Time() {
  const [time, setTime] = useState()

  useEffect(() => {

    setInterval(() => {

      const currentTime = new Date().toLocaleTimeString('en-PK');
      // const dateObject = new Date()

      // const hour = dateObject.getHours()
      // const minute = dateObject.getMinutes()
      // const currentTime = hour + ' : ' + minute
      
      setTime(currentTime)
    }, 1000)

  }, [])

  return (
    <div
      className="bg-black rounded-lg flex justify-center items-center text-white text-4xl md:text-6xl">
        {time}
    </div>
  )
}