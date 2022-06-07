import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <button type="button" onClick={options}>{onLeaveFeedback}</button>
        </>
    )
}