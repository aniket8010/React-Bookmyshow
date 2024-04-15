export function redirectValidPath(pathname){
    return pathname?.toLowerCase()?.split(" ")?.join("-")
} 
export function eleCommaTitle(title, index, arrData){
    return `${title}${arrData.length -1 !== index ?",": ""}`
}