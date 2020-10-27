import React from "react";

interface props {
    label: string;
    word: string;
}
export const DisplayWord = (props: props) => {
    return (
        <div>
            {`${props.label} - ${props.word}`}
        </div>
    );
}