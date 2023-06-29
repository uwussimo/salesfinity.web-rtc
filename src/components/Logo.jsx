export function Logo({dark}) {
    return (
        <span
            className={"flex items-center justify-center w-40 font-bold " + (dark ? "text-white" : "text-indigo-600")}>
            Salesfinity.io
        </span>
    )
}
