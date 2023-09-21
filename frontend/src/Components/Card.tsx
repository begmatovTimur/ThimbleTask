import React, {useContext, useState} from 'react';
import {User} from "../Object/User";
import {v4 as uuidv4} from 'uuid';
import {ArrayContext, ModeContext} from "../Context/context";
import {chevronUp, chevronDown} from "../Icons/icons"

function Card() {
    const {users, setUsers} = useContext(ArrayContext)
    const {mode, setMode} = useContext(ModeContext)
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [subscription, setSubscription] = useState<string>("")
    const [employment, setEmployment] = useState<boolean>(false)

    function save() {
        if (name !== "" && age !== 0) {
            const user: User = {
                id: uuidv4(),
                name,
                age,
                subscription,
                employment
            }
            users.push(user)
            setUsers([...users])
            localStorage.setItem("users", JSON.stringify(users))
            reset()
        } else {
            alert("Fill in all the fields")
        }
    }

    function deleteUser() {
        const updatedItems = users.filter(item => item.id !== localStorage.getItem("currentColumn"));
        localStorage.setItem("users", JSON.stringify(updatedItems))
        setUsers([...updatedItems])
    }

    function setTheme() {
        setMode(!mode)
        localStorage.setItem("mode", JSON.stringify(!mode))
    }

    function reset(): void {
        setName("")
        setAge(0)
        setSubscription("")
        setEmployment(false)
    }

    return (
        <div className="shadow-md w-4/12 h-full ml-20 p-5 border-2 mx-2 border-gray-600 rounded">
            <input
                className="shadow appearance-none border-2 border-gray-600 dark:bg-mainColor rounded w-full my-2 py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-focusColor"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="flex">
                <input
                    className="shadow border-2 border-gray-600 dark:bg-mainColor rounded w-full my-2 py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-focusColor"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />
                <button
                    className="w-20 h-10 dark:bg-blockColorDarkTheme bg-blockColorLightTheme border-r-2 border-border my-2 flex justify-center items-center" onClick={()=>setAge(age+1)}>
                    {chevronUp}
                </button>
                <button
                    className="w-20 h-10 dark:bg-blockColorDarkTheme bg-blockColorLightTheme my-2 flex justify-center items-center" onClick={()=>setAge(age-1)}>
                    {chevronDown}
                </button>
            </div>

            <select
                value={subscription}
                onChange={(e) => setSubscription(e.target.value)}
                className="px-4 py-2 my-2 shadow border-2 border-gray-600 dark:bg-mainColor rounded w-full dark:text-white   leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-focusColor">
                <option value="" selected={true} disabled={true}>Select Subscription</option>
                <option value="SUBSCRIBED">Subscribed</option>
                <option value="NOT_SUBSCRIBED">Not Subscribed</option>
                <option value="OTHER">Other</option>
            </select>
            <label>
                <input type="checkbox"
                       checked={employment}
                       onChange={(e) => setEmployment(!employment)}
                       className={`w-4 h-4 mr-3 rounded border-focusColor  accent-focusColor my-2`}/>
                Employed
            </label>
            <button className={"w-full h-10 dark:bg-blockColorDarkTheme bg-blockColorLightTheme rounded text-1xl my-2"}
                    onClick={save}>Insert
            </button>
            <hr className={"border-buttonColor mt-4 w-10/12 ml-9 mb-7"}/>
            <label className="relative inline-flex items-center mr-5 cursor-pointer mb-5">
                <input
                    type="checkbox"
                    value=""
                    onChange={setTheme}
                    checked={!mode} // Invert the checked state for the input
                    className="sr-only peer"
                />
                <div
                    className={`w-11 h-6 bg-focusColor rounded-full peer  ${
                        mode ? 'peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-full'
                    } peer-checked:after:border-mainColor after:content-[''] after:absolute after:top-0.5 after:left-[2px] ${mode ? "after:bg-mainColor" : "after:bg-white"} after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                        mode ? 'dark:border-gray-600' : ''
                    }`}
                ></div>
                <span className={`ml-3 text-sm font-medium ${
                    mode ? 'text-white' : 'text-gray-900'
                }`}>
        Mode
      </span>
            </label>
            <button className={"w-full h-10 dark:bg-blockColorDarkTheme bg-blockColorLightTheme rounded text-1xl"}
                    onClick={deleteUser}>Delete
            </button>
        </div>
    );
}

export default Card;