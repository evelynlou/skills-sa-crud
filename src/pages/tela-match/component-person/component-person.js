import UserCardMatch from "./cardMatch/userCardMatch";
/**
 * 
 * @param {{ filterPayload: [{}] }} filterPayload 
 * @returns 
 */
export default function ComponentProject({ filterPayload }) {
    return (
        <div>
            <UserCardMatch filterObject={filterPayload} />
        </div>
    )
}
