import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value:string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
      console.log(this.length);  
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const letters ="abcdefghijklmnopqrstuvwxyz";
    const numbers = 1234567890;
    const symbols="!@#$%^&*_-+=?";
     let validChars = '';
     this.password = '';
     if(this.includeLetters){
      validChars += letters;
     }
     if(this.includeNumbers){
      validChars += numbers;
     }
     if(this.includeSymbols){
      validChars += symbols;
     }
     let generatePassword = '';
     for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
     }
     this.password = generatePassword;

  }

  

  

  

  
  
  
  
  ngOnInit() {
  }

}
