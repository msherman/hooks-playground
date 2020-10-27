import {useEffect, useState} from "react";


export const useWord = (word: string) => {
    const [subWord, setSubWord] = useState('');
    console.log("5. useWord");
    useEffect(() => {
        console.log(`customHook: ${word}`);
        setSubWord(`sub-${word}`);
    }, [word]);

    return subWord;
}