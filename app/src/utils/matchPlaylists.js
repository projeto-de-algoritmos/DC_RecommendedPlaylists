export function matchPlaylists(popInversions, rockInversions, pagodeInversions){
    if(popInversions < rockInversions && popInversions < pagodeInversions) return "Pop"
    else if(rockInversions < popInversions && rockInversions < pagodeInversions) return "Rock"
    else if(pagodeInversions < rockInversions && pagodeInversions < popInversions) return "Pagode"
    else if (popInversions === rockInversions && popInversions === pagodeInversions) return null
    else if (popInversions === rockInversions) return "Pop e Rock"
    else if (popInversions === pagodeInversions) return "Pop e Pagode"
    else if (rockInversions === pagodeInversions) return "Rock e Pagode"   
}