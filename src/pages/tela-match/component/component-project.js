import ProjectCardMatch from "./cardMatch/projectCardMatch";

/**
 * 
 * @param {{ filterPayload: [{}] }} filterPayload 
 * @returns 
 */
export default function ComponentProject({ filterPayload }) {
    return (
        <div>
            <ProjectCardMatch filterObject={filterPayload}/>
        </div>
    )
}
