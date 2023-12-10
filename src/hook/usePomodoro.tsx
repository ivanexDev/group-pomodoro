import { useEffect, useState } from "react";

const usePomodoro = (sec: number, min=1) => {

    const [endTime, setEndTime] = useState<number | null>(null);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);


  
    const duration = min * sec * 1000; // 25 minutes in milliseconds
  
    useEffect(() => {
      let timer: NodeJS.Timeout;
  
      if (isRunning) {
        
        timer = setInterval(() => {
          const now = new Date().getTime();
          const difference = endTime! - now;
  
          if (difference > 0) {
            setTimeRemaining(difference);
          } else {
            clearInterval(timer);
            setIsRunning(false);
            alert("Pomodoro completed!");
          }
        }, 1000);
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
    timeRemaining

  }
}

export default usePomodoro