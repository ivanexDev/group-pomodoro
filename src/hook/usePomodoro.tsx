import { useEffect, useState } from "react";

const usePomodoro = (sec: number, min = 1) => {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const duration = min * sec * 1000; // Duración del pomodoro en milisegundos

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      const now = new Date().getTime();
      const initialDifference = endTime! - now;

      if (initialDifference > 0) {
        // Establecer el tiempo restante inicial
        setTimeRemaining(initialDifference);
      } else {
        // Si el tiempo restante inicial es menor o igual a cero, el temporizador ya ha terminado
        setIsRunning(false);
        return; // Salir de la función de efecto para evitar la creación del intervalo
      }

      timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = endTime! - now;

        if (difference > 0) {
          setTimeRemaining(difference);
        } else {
          clearInterval(timer);
          setIsRunning(false);
          setTimeRemaining(0); // Asegurarse de que el tiempo restante sea exactamente cero
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [isRunning, endTime]);

  const startTimer = () => {
    const now = new Date().getTime();
    const newEndTime = now + duration;
    setEndTime(newEndTime);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setEndTime(null);
    setTimeRemaining(0);
    setIsRunning(false);
  };

  const calcularPorcentajeTranscurrido = (tiempoTranscurrido: number, duracionTotal: number): number => {
    if (tiempoTranscurrido < 0 || duracionTotal <= 0) {
      throw new Error("El tiempo transcurrido y la duración total deben ser valores positivos.");
    }

    const porcentaje = (tiempoTranscurrido / duracionTotal) * 100;
    return Math.min(100, porcentaje); // Limitar a un máximo del 100%
  };

  const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const porcentajeTranscurrido = calcularPorcentajeTranscurrido(
    endTime ? duration - timeRemaining : 0,
    duration
  );

  return {
    startTimer,
    pauseTimer,
    resetTimer,
    formatTime,
    porcentajeTranscurrido,
    timeRemaining,
  };
};

export default usePomodoro;
