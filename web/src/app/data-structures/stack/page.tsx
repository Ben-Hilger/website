'use client';

import React from "react";
import DataStructureNavigation from "../datastructure.navigation";
import Stack from "@/app/lib/stack";

export default function Page() {

    const [_length, setLength] = React.useState(0);
    const [stack, setStack] = React.useState(new Stack<number>());
    const [pushValue, setPushValue] = React.useState(0);

    function pushToStack() {
        if (pushValue === undefined || pushValue === null) {
            return;
        }
        let tempStack = stack;
        tempStack.push(pushValue);
        setStack(tempStack);
        setLength(tempStack.length);
        setPushValue(0);
    }

    function pop() {
        if (stack.length === 0) {
            return;
        }

        let tempStack = stack;
        const value = tempStack.pop();
        if (value !== undefined) {
            setPushValue(value);
        }
        setStack(tempStack);
        setLength(tempStack.length);
    }

    function peek() {
        if (stack.length === 0) {
            return;
        }

        const value = stack.peek();
        if (value !== undefined) {
            setPushValue(value);
        }
    }

    function getButtonClass() {
        if (stack.length > 0) {
            return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        }
        return "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center";
    }

    function displayStack() {
        return stack.peekAllForDisplay().map((value, index, arr) => {
            const isLast = index === arr.length - 1;
            return (
                <>
                    <div>
                        <div className="text-center border-2 border-rounded border-blue-800 p-1 mb-1" key={index}>
                            <p>{ value }</p>
                        </div>
                    </div>
                    {
                        isLast ? <></> : <div className="arrow down mb-1"></div> 
                    } 
                </>
            );
        })
    }

    return (
        <>
            <DataStructureNavigation />
            <div className="w-100 flex flex-col align-items-center">
                <b className="text-2xl">Stack</b>
                <p><b>Length</b>: { stack.length }</p>
                <p>A stack follows the principle of First In Last Out (FILO), where the newest value is at the top of the stack. When you pop, you pop from the top of the stack only.</p>
                <div className="flex align-items-center flex-row mt-1">
                    <div className="flex flex-col mr-3 flex-1">
                       <p><b>Push</b>: Push an item to the top of the stack</p>
                       <p><b>Pop</b>: Remove the top item of the stack. The number removed will be put in the input box</p>
                       <p><b>Peek</b>: See what the top value is without modifying the stack itself. The number peeked will be put in the input box.<br /> In a typical stack, you can only get/view the top item. We show you the entire stack here for demonstration purposes</p>
                    </div>
                    <div className="flex flex-col align-items-center flex-1">
                        <p>Modify Stack</p>
                        <input type="number"
                            value={pushValue}
                            onChange={evt => setPushValue(Number(evt.target.value))}
                            className="w-100 mb-1 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                        <div className="flex flex-row">
                            <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={_ => pushToStack()}>Push Value</button>
                            <button type="button"
                                className={getButtonClass()}
                                onClick={_ => pop()}>Pop</button>
                            <button type="button"
                                className={getButtonClass()}
                                onClick={_ => peek()}>Peek</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col align-items-center mt-3">
                    <b className="mb-1">Top of Stack</b>
                    { stack.length > 0 ? displayStack() : <p>Add an item to the stack to see it here! </p>}
                </div>
            </div>
        </>
    );
}
