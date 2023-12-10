import {
  CheckIcon,
  ClockIcon,
  PauseIcon,
  PencilIcon,
  PlayIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import {
  Card,
  ProgressCircle,
  Button,
  Flex,
  Title,
  Divider,
  Badge,
} from "@tremor/react";
import usePomodoro from "../hook/usePomodoro";
import { setSupabaseTimer, stopPomodoro, supabase } from "../supabase/config";
import { useEffect, useState } from "react";


const Timer= () => {
  const {formatTime,pauseTimer,resetTimer,startTimer,porcentajeTranscurrido, timeRemaining } = usePomodoro(5,60)
  const [id , setId ] =  useState<number>(0)


useEffect(()=>{
  supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'pomodoro-timer' },
    (payload) => {
      console.log('Change received!', payload)
      if(!payload.new.state){
        console.log("pase por aca")
        return resetTimer()
      }
      setId(payload.new.id)
      startTimer()
    }
  )
  .subscribe()

},[])


  const handleTimer = () => {
    const state = true;
    const time = "25:00";
    setSupabaseTimer(state, time);
  };

  const handleStopTimer = ()=>{
    stopPomodoro(id);
  }


  return (
    <Card className="w-[400px]" decoration="top" decorationColor="indigo">
      <Flex flexDirection="col" className="gap-5">
        <Flex>
          <Title className="text-center text-2xl">Pomodoro - Group</Title>
          <Button className="" icon={PencilIcon} color="indigo">
            Edit
          </Button>
        </Flex>
        <Divider />
        <Flex className="gap-2" justifyContent="center">
          <Badge
            className="flex justify-center items-center"
            icon={CheckIcon}
            color="emerald"
          />
          <Badge icon={ClockIcon} />
          <Badge icon={ClockIcon} />
          <Badge icon={ClockIcon} />
        </Flex>
        <ProgressCircle value={porcentajeTranscurrido} size="xl" color="indigo">
          <span className="h-[120px] w-[120px] rounded-full bg-indigo-100 flex items-center justify-center text-3xl text-indigo-500 font-medium">
            {formatTime(timeRemaining)}
          </span>
        </ProgressCircle>
        <Divider />
        <Flex className="gap-2" justifyContent="center">
          <Button onClick={handleStopTimer} icon={RefreshIcon} color="red">
            Reset
          </Button>
          <Button onClick={pauseTimer} color="indigo" icon={PauseIcon}>
            Pause
          </Button>
          <Button onClick={handleTimer} color="indigo" icon={PlayIcon}>
            Start
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Timer;
