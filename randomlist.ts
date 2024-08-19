export const randlist = (arr:any[]) =>{
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}