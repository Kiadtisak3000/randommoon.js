export const flatten = (vars:any[]) =>{
   return vars.reduce((flatt:any[],sub:any) => flatt.concat(sub))
} 