class Currency{
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url ='https://api.exchangerate.host/latest?base=';
        this.amount = null;
    }
    exchange(){
       return new Promise((resolve,reject)=>{
        fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
             const getCurr = data.rates[this.secondCurrency] 
             const amountN = Number(this.amount);
             const calc = amountN * getCurr;
             resolve(calc)
        })
        .catch(err => console.log(err))
       })
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency 
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency 
    }
    changeAmount(val){
        this.amount = val;   
     }
}
