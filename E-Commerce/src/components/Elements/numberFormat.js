export function numberFormat(number){
    number = number.toFixed(2)
    number = String(number)
    return number.length > 0 ? new Intl.NumberFormat("en-US").format(number): number
}