export function redirectValidPath(pathname) {
    return pathname?.toLowerCase()?.split(" ")?.join("-")
}
export function eleCommaTitle(title, index, arrData) {
    return `${title}${arrData.length - 1 !== index ? "," : ""}`
}
export function findIsExist(selected = [], value, keyname) {
    const isExist = selected.find((finalValue) => finalValue[keyname] === value)
    if (isExist) return true
    return false
}

export function removeSpecialCharacters(value, isUpperCase = true) {
    if (isUpperCase) {
        value = value.toUpperCase()
    }
    return value?.split("-")?.join(" ")
}