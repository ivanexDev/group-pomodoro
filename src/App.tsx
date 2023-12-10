import { useEffect, useState } from 'react'
import {setSupabaseTimer, supabase} from "./supabase/config"
import './App.css'

type Timer = {
  time: string,
  state: boolean
}

function App() {
  const [timer, setTimer] = useState<Timer | null>({state:false , time: "00"})


  useEffect(()=>{

  },[timer])

  supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'pomodoro-timer' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()




  const handleTimer = ()=>{
    const state = true;
    const time = "00:00:00"
    setSupabaseTimer(state, time)


    
  }

  return (
    <>

    <h1>Pomodoro</h1>
    <p>{timer?.state.toString()}</p>
    <p>{timer?.time}</p>
    <button onClick={handleTimer}>Empecemos</button>

    </>
  )
}

export default App
