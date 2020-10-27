import React, {useEffect, useState} from "react";
import {DisplayWord} from "./DisplayWord";
import {useWord} from "../hooks/useWord";
import {useInitialWord} from "../hooks/useInitialWord";

export const SearchWithState: React.FC = () => {
    const [limit, setLimit] = useState(0);
    const [query, setQuery] = useState('');
    const nonStateWord = useInitialWord();

    const updateTheState = () => {
        console.log("1. SearchWithoutRef - updateTheState - start");
        setLimit(limit + 1);
        console.log("2, SearchWithoutRef - updateTheState - end");
    }


    useEffect(() => {
        console.log("3. SearchWithoutRef - useEffect - start")
        setQuery(`${nonStateWord} = ${limit}`);
        console.log("4. SearchWithoutRef - useEffect - end")
    },[setQuery, limit, nonStateWord] );

    const word = useWord(query);

    return (
        <div>
            <h2> With State </h2>
            <div>{`The value is ${limit}`}</div>
            <DisplayWord label={'Not passed through hook'} word={query} />
            <DisplayWord label={'passed through hook'} word={word} />
            <button onClick={updateTheState}>Update word</button>
            <hr />
        </div>
    );
}
