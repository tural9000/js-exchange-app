class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.firstText = document.getElementById('f-txt');
        this.secondText = document.getElementById('s-txt');
        this.result = document.getElementById('result');
    }
  changeFirstText(){
      this.firstText.innerHTML = this.firstSelect.options[this.firstSelect.selectedIndex].textContent
  }

  changeSecondText(){
      this.secondText.innerHTML = this.secondSelect.options[this.secondSelect.selectedIndex].textContent
  }
  changeResult(num){
      this.result.value = num
  }
}

