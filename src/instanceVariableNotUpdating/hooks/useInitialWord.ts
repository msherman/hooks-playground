import {useEffect, useState} from "react";

export const useInitialWord = () => {
    const [initial, setInitial] = useState(``);

    useEffect(() => {
        setInitial('initial word');
    });

    return initial;
}