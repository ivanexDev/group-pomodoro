import { PlayIcon, RefreshIcon } from "@heroicons/react/outline";
import {
  Card,
  ProgressCircle,
  Button,
  Flex,
  Title,
  Divider,
} from "@tremor/react";
import usePomodoro from "../hook/usePomodoro";

interface TimerProps{
  handleTimer: () => void,
  time: string | undefined
}

const Timer: React.FC<TimerProps> = ({handleTimer, time}) => {

  const {formatTime,pauseTimer,resetTimer,startTimer,porcentajeTranscurrido, timeRemaining } = usePomodoro(10)



  return (
    <Card className="w-[400px]">
      <Flex flexDirection="col" className="gap-5">
        <Title className="text-center text-2xl">Pomodoro - Group</Title>
        <Divider />
        <ProgressCircle value={Math.round(porcentajeTranscurrido)} size="xl">
          <span className="text-3xl text-gray-700 font-medium">{formatTime(timeRemaining)}</span>
        </ProgressCircle>
        <Divider />
        <Flex className="gap-2" justifyContent="center">
          <Button onClick={startTimer} color="emerald" icon={PlayIcon}>
            Start
          </Button>
          <Button onClick={pauseTimer} color="yellow">Pause</Button>
          <Button onClick={resetTimer} icon={RefreshIcon} color="red">Reset</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Timer;
