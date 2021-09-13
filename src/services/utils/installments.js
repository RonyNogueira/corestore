export const installmentPrice = (value, installment)=>{
    return (parseFloat(value)/installment).toFixed(2).replace(".", ",")
}