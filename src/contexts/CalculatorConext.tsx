import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

export interface IValues {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

interface ISimulation {
  1: number;
  15: number;
  30: number;
  90: number;
}

interface ICalculatorContext {
  values: IValues | null;
  setValues: React.Dispatch<React.SetStateAction<IValues | null>>;
  simulation: ISimulation;
}

interface ICalculatorProvider {
  children: ReactNode;
}

export const CalculatorContext = createContext<ICalculatorContext>(
  {} as ICalculatorContext
);

export function CalculatorProvider({ children }: ICalculatorProvider) {
  const [values, setValues] = useState<IValues | null>({} as IValues);
  const [simulation, setSimulation] = useState<ISimulation>({} as ISimulation);

  useEffect(() => {
    console.log(values);

    async function calculate(data: IValues) {
      try {
        const response = await api.post<ISimulation>("", data);
        setSimulation(response.data);
      } catch (error) {
        console.log(error, "Algo deu errado");
      }
    }

    if (values?.amount! > 1000 && values?.installments && values?.mdr) {
      calculate(values);
    }
  }, [values]);

  return (
    <CalculatorContext.Provider value={{ values, simulation, setValues }}>
      {children}
    </CalculatorContext.Provider>
  );
}
