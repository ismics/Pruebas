export function isAmountBounded(ncant) {

    const cant = ncant;

    if ((cant < 1) || (cant > 1000)) {
        return false
    } else {
        return true
    }
}