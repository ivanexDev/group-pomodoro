import { PlayIcon, RefreshIcon } from "@heroicons/react/outline";
import {
  Card,
  ProgressCircle,
  Button,
  Flex,
  Title,
  Divider,
} from "@tremor/react";

interface TimerProps{
  handleTimer: () => void,
  time: string | undefined
}

const Timer: React.FC<TimerProps> = ({handleTimer, time}) => {
  return (
    <Card className="w-[400px]">
      <Flex flexDirection="col" className="gap-5">
        <Title className="text-center text-2xl">Pomodoro - Group</Title>
        <Divider />
        <ProgressCircle value={10} size="xl">
          <span className="text-3xl text-gray-700 font-medium">{time}</span>
        </ProgressCircle>
        <Divider />
        <Flex className="gap-2" justifyContent="center">
          <Button icon={RefreshIcon}>Reset</Button>
          <Button onClick={handleTimer} color="emerald" icon={PlayIcon}>
            Start
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Timer;
