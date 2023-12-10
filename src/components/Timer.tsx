import { PlayIcon, RefreshIcon } from "@heroicons/react/outline";
import {
  Card,
  ProgressCircle,
  Button,
  Flex,
  Title,
  Divider,
} from "@tremor/react";

const Timer = () => {
  return (
    <Card className="w-[400px]">
      <Flex flexDirection="col" className="gap-5">
        <Title className="text-center text-2xl">Pomodoro - Group</Title>
        <Divider />
        <ProgressCircle value={10} size="xl">
          <span className="text-3xl text-gray-700 font-medium">10:50:22</span>
        </ProgressCircle>
        <Divider />
        <Flex className="gap-2" justifyContent="center">
          <Button icon={RefreshIcon}>Reset</Button>
          <Button color="emerald" icon={PlayIcon}>
            Start
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Timer;
