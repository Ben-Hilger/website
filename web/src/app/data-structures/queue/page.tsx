'use client';

import React from "react";
import DataStructureNavigation from "../datastructure.navigation";
import Queue from "@/app/lib/queue";

export default function Page() {

    const [_length, setLength] = React.useState(0);
    const [queue, setStack] = React.useState(new Queue<number>());
    const [pushValue, setPushValue] = React.useState(0);

    function queueItem() {
        if (pushValue === undefined || pushValue === null) {
            return;
        }
        let tempStack = queue;
        tempStack.enqueue(pushValue);
        setStack(tempStack);
        setLength(tempStack.length);
        setPushValue(0);
    }

    function pop() {
        if (queue.length === 0) {
            return;
        }

        let tempStack = queue;
        const value = tempStack.deque();
        if (value !== undefined) {
            setPushValue(value);
        }
        setStack(tempStack);
        setLength(tempStack.length);
    }

    function peek() {
        if (queue.length === 0) {
            return;
        }

        const value = queue.peek();
        if (value !== undefined) {
            setPushValue(value);
        }
    }

    function getButtonClass() {
        if (queue.length > 0) {
            return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        }
        return "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center";
    }

    function displayStack() {
        return queue.peekAllForDisplay().map((value, index, arr) => {
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
                <b className="text-2xl">Queue</b>
                <p><b>Length</b>: { queue.length }</p>
                <p>A queue follows the principle of First In First Out (FIFO), where the newest value is added the tail of the queue. When you pop, you pop from the head of the queue only.</p>
                <div className="flex align-items-center flex-row mt-1">
                    <div className="flex flex-col mr-3 flex-1">
                       <p><b>Enqueue</b>: Add an item to the tail of the queue</p>
                       <p><b>Deque</b>: Remove the head item of the queue. The number removed will be put in the input box</p>
                       <p><b>Peek</b>: See what the head value of the queue is without modifying the queue itself. The number peeked will be put in the input box<br /> In a typical queue, you can only get/view the top item. We show you the entire queue here for demonstration purposes</p>
                    </div>
                    <div className="flex flex-col align-items-center flex-1">
                        <p>Modify Queue</p>
                        <input type="number"
                            value={pushValue}
                            onChange={evt => setPushValue(Number(evt.target.value))}
                            className="w-100 mb-1 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                        <div className="flex flex-row">
                            <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={_ => queueItem()}>Enqueue</button>
                            <button type="button"
                                className={getButtonClass()}
                                onClick={_ => pop()}>Deque</button>
                            <button type="button"
                                className={getButtonClass()}
                                onClick={_ => peek()}>Peek</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col align-items-center mt-3">
                    <b className="pb-1">Head of Queue</b>
                    { queue.length > 0 ? displayStack() : <p>Add an item to the queue to see it here! </p>}
                    <b className="pt-1">Tail of Queue</b>
                </div>
            </div>
        </>
    );
}
