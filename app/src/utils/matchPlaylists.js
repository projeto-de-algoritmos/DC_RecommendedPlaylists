export function matchPlaylists(popInversions, rockInversions, pagodeInversions){
    if (popInversions === rockInversions && popInversions === pagodeInversions) return "Nenhuma playlist recomendada"
    else if (popInversions === rockInversions) return "Pop e Rock"
    else if (popInversions === pagodeInversions) return "Pop e Pagode"
    else if (rockInversions === pagodeInversions) return "Rock e Pagode"
    
    if (mostly(popInversions, rockInversions, pagodeInversions)) return "Pop"
    if (mostly(rockInversions, popInversions, pagodeInversions)) return "Rock"
    if (mostly(pagodeInversions, popInversions, rockInversions)) return "Pagode"
}

function mostly(max, u, v){
    return max < u && max < v
}