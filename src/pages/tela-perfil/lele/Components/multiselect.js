import React from "react";
//import Select from "react-select/dist/declarations/src/Select";

const options = [
    { value: "skill 1", label: "skill 1" },
    { value: "skill 2", label: "skill 2" },
    { value: "skill 3", label: "skill 3" },
    { value: "skill 4", label: "skill 4" },
    { value: "skill 5", label: "skill 5" }
]

const Multiselect = () => {
    return (
        <div>
            <select isMulti options={options} />
        </div>
    )

}

export { Multiselect }