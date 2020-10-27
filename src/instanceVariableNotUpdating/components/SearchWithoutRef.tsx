import React, {useEffect, useState} from "react";
import {useWord} from "../hooks/useWord";
import {DisplayWord} from "./DisplayWord";
import {useInitialWord} from "../hooks/useInitialWord";

export const SearchWithoutRef: React.FC = () => {
    const [limit, setLimit] = useState(0);
    let nonStateWord = useInitialWord();

    const updateTheState = () => {
        console.log("1. SearchWithoutRef - updateTheState - start");
        setLimit(limit + 1);
        console.log("2, SearchWithoutRef - updateTheState - end");
    }

    useEffect(() => {
        console.log("3. SearchWithoutRef - useEffect - start")
        // This is purposefully throwing a warning to use as an example
        nonStateWord = `${nonStateWord} = ${limit}`;
        console.log("4. SearchWithoutRef - useEffect - end")
    });

    const word = useWord(nonStateWord);

    return (
        <div>
            <h2> Without Ref </h2>
            <div>{`The value is ${limit}`}</div>
            <DisplayWord label={'The word is'} word={word} />
            <DisplayWord label={'The nonStateWord is'} word={nonStateWord} />
            <button onClick={updateTheState}>Update word</button>
            <hr />
        </div>
    );
}