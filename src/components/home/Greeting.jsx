import React, {useEffect, useState} from 'react'

function Greeting() {

    const [greeting, setGreeting] = useState("")
    const [time, setTime] = useState(new Date())

//    const handleGreeting = () => {

//     let hours = new Date().getHours()

//     setGreeting(hours > 12 ? "Afternoon" : hours > 18 ? "Evening" : hours < 12 ? "Morning" : "Hi") 
//    }

useEffect(() => {
    let hours = new Date().getHours()

    return setGreeting(hours > 18 ? "Evening" : hours > 12 ? "Afternoon" : hours < 12 ? "Morning" : "Hi") 
})


  return (
    <>
    <div className='mx-5 mt-10 space-y-3'>
    <div className='md:text-5xl text-2xl font-semibold'>{greeting || "Hi"}! Piyush</div>
    <p className='text-[16px]'>What do you want to do today?</p>
    </div>
    </>
  )
}

export default Greeting