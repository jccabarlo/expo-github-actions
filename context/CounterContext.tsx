import { createContext, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(currentCount => currentCount + 1);
  const decrement = () => setCount(currentCount => currentCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};