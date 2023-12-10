import { CheckIcon } from "@heroicons/react/outline";
import { Button, Flex, Select, SelectItem, Subtitle } from "@tremor/react";

const SettingsForm = () => {
  const workDurations = [
    { value: "1", label: "1 minute" },
    { value: "3", label: "3 minutes" },
    { value: "5", label: "5 minutes" },
    { value: "10", label: "10 minutes" },
    { value: "15", label: "15 minutes" },
    { value: "20", label: "20 minutes" },
    { value: "25", label: "25 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "60 minutes" },
  ];

  return (
    <>
      <form >
        <Flex flexDirection="col" className="gap-4 w-full">
          <Flex flexDirection="col" alignItems="start">
            <Subtitle>Work Duration</Subtitle>
            <Select>
              {workDurations.map((duration, index) => (
                <SelectItem
                  key={duration.value + duration.label + index}
                  value={duration.value}
                >
                  {duration.label}
                </SelectItem>
              ))}
            </Select>
          </Flex>
          <Flex flexDirection="col" alignItems="start">
            <Subtitle>Short Break Duration</Subtitle>
            <Select>
              {workDurations.map((duration, index) => (
                <SelectItem
                  key={duration.value + duration.label + index}
                  value={duration.value}
                >
                  {duration.label}
                </SelectItem>
              ))}
            </Select>
          </Flex>
          <Flex flexDirection="col" alignItems="start">
            <Subtitle>Long Break Duration</Subtitle>
            <Select>
              {workDurations.map((duration, index) => (
                <SelectItem
                  key={duration.value + duration.label + index}
                  value={duration.value}
                >
                  {duration.label}
                </SelectItem>
              ))}
            </Select>
          </Flex>
          <Flex justifyContent="end">
          <Button icon={CheckIcon} color="emerald">Done</Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default SettingsForm;
