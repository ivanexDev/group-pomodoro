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

interface TimerProps {
  handleShowModal: () => void;
}

const Timer: React.FC<TimerProps> = ({
  handleShowModal,
}) => {
  return (
    <>
      <Card className="w-[400px]" decoration="top" decorationColor="indigo">
        <Flex flexDirection="col" className="gap-5">
          <Flex>
            <Title className="text-center text-2xl">Pomodoro - Group</Title>
            <Button
              className="transition-colors duration-300"
              onClick={() => handleShowModal()}
              icon={PencilIcon}
              color="indigo"
            >
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
          <ProgressCircle value={10} size="xl" color="indigo">
            <span className="h-[120px] w-[120px] rounded-full bg-indigo-100 flex items-center justify-center text-3xl text-indigo-500 font-medium">
              {0}
            </span>
          </ProgressCircle>
          <Divider />
          <Flex className="gap-2" justifyContent="center">
            <Button
              className="transition-colors duration-300"
              color="red"
              icon={RefreshIcon}
            >
              Reset
            </Button>
            <Button
              className="transition-colors duration-300"
              color="indigo"
              icon={PauseIcon}
            >
              Pause
            </Button>
            <Button
              className="transition-colors duration-300"
              // onClick={handleTimer}
              color="indigo"
              icon={PlayIcon}
            >
              Start
            </Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Timer;
