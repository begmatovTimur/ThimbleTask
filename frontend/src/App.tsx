import React, {useState} from 'react';
import Card from "./Components/Card";
import Table from "./Components/Table";
import "./style.css"
import {ArrayContext, ColumnContext, ModeContext} from "./Context/context";
import {User} from "./Object/User";

function App() {
    const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("users") ?? "[]"))
    const [currentColumn, setCurrentColumn] = useState<string>(localStorage.getItem("currentColumn") ?? "")
    const [mode, setMode] = useState<boolean>(JSON.parse(localStorage.getItem("mode") ?? "false"))

    return (
        <div className={`${mode?"dark":""} h-screen flex justify-center items-center`}>
            <ArrayContext.Provider value={{users, setUsers}}>
                <ColumnContext.Provider value={{currentColumn, setCurrentColumn}}>
                    <ModeContext.Provider value={{mode, setMode}}>
                        <Card/>
                        <Table/>
                    </ModeContext.Provider>
                </ColumnContext.Provider>
            </ArrayContext.Provider>
        </div>
    );
}

export default App;
