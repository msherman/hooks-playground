import React, {useEffect, useState} from "react";
import {DisplayWord} from "./DisplayWord";
import {useWord} from "../hooks/useWord";
import {useInitialWord} from "../hooks/useInitialWord";

interface queryValues {
    firstQuery: string;
    secondQuery: string;
}

export const SearchWithObjectState: React.FC = () => {
    const [limit, setLimit] = useState(0);
    const [query, setQuery] = useState<queryValues>({
        firstQuery: '',
        secondQuery: ''
    });
    const nonStateWord = useInitialWord();

    const updateTheState = () => {
        console.log("1. SearchWithoutRef - updateTheState - start");
        setLimit(limit + 1);
        console.log("2, SearchWithoutRef - updateTheState - end");
    }

    useEffect(() => {
        const internalQuery: queryValues = {
            firstQuery: 'firstQuery non changing',
            secondQuery: `${nonStateWord} = ${limit}`
        };
        console.log("3. SearchWithoutRef - useEffect - start")
        setQuery(internalQuery);
        console.log("4. SearchWithoutRef - useEffect - end")
    },[setQuery, limit, nonStateWord] );

    const word = useWord(query.secondQuery);

    return (
        <div>
            <h2> With Object State </h2>
            <div>{`The value is ${limit}`}</div>
            <DisplayWord label={'First Query'} word={query.firstQuery} />
            <DisplayWord label={'Second Query - Not passed through hook'} word={query.secondQuery} />
            <DisplayWord label={'Second Query - passed through hook'} word={word} />
            <button onClick={updateTheState}>Update word</button>
            <hr />
        </div>
    );
}
