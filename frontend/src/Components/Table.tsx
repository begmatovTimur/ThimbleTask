import React, {useContext} from 'react';
import {User} from "../Object/User";
import {ArrayContext, ColumnContext} from "../Context/context";

function Table() {
    const {currentColumn, setCurrentColumn} = useContext(ColumnContext)
    const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");

    function selectColumn(id: string) {
        setCurrentColumn(id)
        localStorage.setItem("currentColumn", id)
    }

    return (
        <div className={"border-2 border-gray-600 rounded p-3 mx-2 h-96"}>
            <table className="w-full">
                <thead className={"dark:bg-blockColorDarkTheme bg-blockColorLightTheme pl-20"}>
                <tr>
                    <th className={"py-3 px-10"}>Name</th>
                    <th className={"py-3 px-10"}>Age</th>
                    <th className={"py-3 px-10"}>Subscription</th>
                    <th className={"py-3 px-10"}>Employment</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users?.map(item =>
                            <tr className={`${localStorage.getItem("currentColumn")===item.id?'bg-focusColor text-white':''} text-center`} onClick={()=>selectColumn(item.id)}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.subscription}</td>
                                <td>{item.employment ? "Employed" : "Unemployed"}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;