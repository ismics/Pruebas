export function isWorkday(day){
    const today = day;
    switch (today) {
        case "lunes":
            return true;
        case "martes":
            return true;
        case "miercoles":
            return true;
        case "jueves":
            return true;
        case "viernes":
            return true;
        case "sabado":
            return false;
        case "domingo":
            return false;
        default:
            return false;
    }
}