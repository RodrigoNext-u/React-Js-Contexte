import { createContext } from "react"
import Cheese from "./types"


type CheeseContextType = {
    cheeses: Cheese[],
    isSelected: boolean;
}

export const CheeseContext = createContext<CheeseContextType>({cheeses: [], isSelected: false})