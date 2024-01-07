'use client';

import React from "react";
import DataStructureNavigation from "../datastructure.navigation";

export default function ArrayList() {

    let [length, setLength] = React.useState(0);
    let [capacity, setCapacity] = React.useState(10);

    let [arrayList, setArrayList] = React.useState<Array<number>>(Array(capacity));

    let [inputText, setInputText] = React.useState<number>(0);

    let [getValue, setGetValue] = React.useState<number>(0);

    let [removeAtValue, setRemoveAtValue] = React.useState<number>(0);

    let [removeValue, setRemoveValue] = React.useState<number>(0);

    let [resultValue, setResultValue] = React.useState("");

    function addToArrayList() {
        const newLength = incrementLength();
        const arrayValidation = validateArraySize(newLength);
        let array = arrayValidation.array;
        array[newLength - 1] = inputText;
        updateStates(array, arrayValidation.capacity, newLength);
    }

    function prependToArrayList() {
        const newLength = incrementLength();
        const arrayValidation = validateArraySize(newLength);
        let array = arrayValidation.array;
        for (let i = arrayList.length - 1; i >= 0; i--) {
            if (array[i] != undefined) {
                array[i + 1] = array[i];
            }
        }
        array[0] = inputText;
        updateStates(array, arrayValidation.capacity, newLength);
    }

    function removeAtIndex() {
        if (removeAtValue < 0 || removeAtValue >= length) {
            setRemoveAtValue(0);
            return;
        }
        const newLength = decrementLength();
        const arrayValidation = validateArraySize(newLength, true);
        let array = arrayValidation.array;
        array.splice(removeAtValue, 1);
        updateStates(array, arrayValidation.capacity, newLength);
    }

    function removeValueInArray() {
        const result = arrayList.findIndex((value) => value === removeValue);
        if (result === -1) {
            setRemoveValue(0);
            return;
        }
        const newLength = decrementLength();
        const arrayValidation = validateArraySize(newLength, true);
        let array = arrayValidation.array;
        array.splice(result, 1);
        updateStates(array, arrayValidation.capacity, newLength);
    }


    function updateStates(array: Array<number>,
        capacity: number,
        length: number) {
        setCapacity(capacity);
        setLength(length);
        setArrayList(array);
        setInputText(0);
    }

    function incrementLength() {
        return length + 1;
    }

    function decrementLength() {
        return length - 1;
    }

    function validateArraySize(length: number, isRemoving = false): { capacity: number, array: Array<number> } {
        let newArray = arrayList;
        let newCapacity = capacity;
        if (length > capacity) {
            setResultValue("Did you notice that the capacity doubled? Once the capacity is exceeded, it doubles, and then creates a new array with that expanded capacity. This can be different depending on how the underlying ArrayList is implemented");
            newCapacity *= 2;
            let expandedArray = new Array(newCapacity);
            for (let i = 0; i < newArray.length; i++) {
                expandedArray[i] = newArray[i];
            }
            newArray = expandedArray;
        } else if (length < capacity / 2 && isRemoving) {
            setResultValue("Do you notice how, even though less than half of the capacity is used, the capacity remains the same? Typically, ArrayList's do not remove capacity, and only increase the capacity as needed"); 
        }
        return { capacity: newCapacity, array: newArray };
    }

    function getIndexValue() {
        const getIndex: number = Number(getValue);
        if (isNaN(getIndex)) {
            setResultValue("Please enter a valid value");
            return;
        } else if (getIndex >= length || getIndex < 0) {
            setResultValue("You entered a number outside the bounds of the current array");
            return;
        }
        const indexValue = arrayList[getIndex];
        setResultValue(`The value is: ${indexValue}`);
    }

    function getArrayListDisplay() {
        return arrayList.map((item, index) => {
            return (
                <div className="mr-1 mt-1 border-01 p-2 border-rounded" key={index}>
                    <p className="m-0 p-0">{item}</p>
                </div>
            );
        })
    }

    function getEmptySlots() {
        const numberOfEmptySlots = capacity - length;
        const offset = length;
        let emptySlots = [];

        for (let i = 0; i < numberOfEmptySlots; i++) {
            emptySlots.push(<div key={i + offset} className="mr-1 mt-1 border-01 p-2 border-rounded bg-gray-300">
            </div>)
        }

        return emptySlots;
    }

    function removeValueRegion() {
        return (
            <>
                <p>Remove Value:</p>
                <input type="number"
                    value={removeValue}
                    onChange={evt => setRemoveValue(Number(evt.target.value))}
                    className="w-100 mb-1 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="flex flex-row">
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={_ => removeValueInArray()}>
                        Remove that value
                    </button>
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={_ => removeAtIndex()}>
                        Remove that index
                    </button>
                </div>
            </>

        );
    }

    function getAtInputRegion() {
        return (
            <>
                <p>Get At Index:</p>
                <input type="number"
                    value={getValue}
                    onChange={evt => setGetValue(Number(evt.target.value))}
                    className="w-100 mb-1 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={_ => getIndexValue()}>
                    Get me that value
                </button>
            </>
        );
    }

    function modifyArrayListInputRegion() {
        return (
            <>
                <p>Modify ArrayList</p>
                <input type="number"
                    value={inputText}
                    onChange={evt => setInputText(Number(evt.target.value))}
                    className="w-100 mb-1 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="flex flex-row">
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={_ => prependToArrayList()}>Prepend</button>
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={_ => addToArrayList()}>Append</button>
                </div>
            </>
        );
    }

    return (
        <>
            <DataStructureNavigation />
            <div className="w-100 flex flex-col align-items-center">
                <b className="text-2xl">ArrayList</b>
                <p><b>Length</b>: {length}</p>
                <p><b>Capacity</b>: {capacity}</p>
                <p className="text-center pl-5 pr-5">An <b>ArrayList</b> abstracts the allocation and management of the underlying array. An array has fixed memory, with a defined length. So, when you <b>exceed the defined capacity of the array</b>, an ArrayList will automatically create a new array with a larger size, and move the existing array into the new array.</p>
                <div className="flex flex-row w-75 pt-2 align-items-center justify-content-center">
                    <div className="flex flex-col flex-1 pr-2">
                       <p className="pb-1"><b>Remove Value</b>: This finds the first instance of the value from the beginning of the ArrayList, and removes that value. It maintains the order of the rest of the ArrayList</p>
                       <p className="pb-1"><b>Remove At Index</b>: This removes the value at the specified index, while maintianing the order of the rest of the ArrayList</p>
                       <p className="pb-1"><b>Get At Index</b>: Gets the value at the specified index. You wil get an error if you enter a number not within the current length of the ArrayList</p>
                       <p className="pb-1"><b>Prepend</b>: Adds the value to the beginning of the ArrayList. To be able to do this, the ArrayList needs to move all of the existing elements one index up in the ArrayList. This frees index 0, where it can prepend the value</p>
                       <p><b>Append</b>: Adds the value to the end of the ArrayList</p>
                    </div>
                    <div className="flex flex-col align-items-center justify-content-center flex-1">
                            {removeValueRegion()}
                            {getAtInputRegion()}
                            {modifyArrayListInputRegion()}
                    </div>
                </div>
                <div className="p-1 flex w-50 justify-content-center align-items-center">
                    <p><b>Result</b>: {resultValue}</p>
                </div>
                <div className="flex flex-row align-items-center w-75 flex-wrap justify-content-center">
                    {getArrayListDisplay()}
                    {getEmptySlots()}
                </div>
            </div>
        </>
    );
}
