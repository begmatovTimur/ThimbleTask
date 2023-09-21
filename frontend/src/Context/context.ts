import {createContext} from "react";
import {User} from "../Object/User";

export const ColumnContext = createContext<columnHook>({
    currentColumn: "",
    setCurrentColumn: value => {
    }
});
export const ArrayContext = createContext<userHook>({
    users: [],
    setUsers: value => {
    }
});

export const ModeContext = createContext<modeHook>({
    mode: false,
    setMode: value => {
    }
});

export const modeContext = createContext<modeHook>({
    mode: false,
    setMode: value => {
    }
});

type userHook = {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

type columnHook = {
    currentColumn: string,
    setCurrentColumn:  React.Dispatch<React.SetStateAction<string>>
}

type modeHook = {
    mode: boolean,
    setMode:  React.Dispatch<React.SetStateAction<boolean>>
}