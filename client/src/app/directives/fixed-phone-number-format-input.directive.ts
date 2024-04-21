import { Directive, ElementRef, HostListener } from '@angular/core';
import { CallUsModalWindowService } from "../services/call-us-modal-window.service";

@Directive({
  selector: '[appFixedPhoneNumberFormatInput]'
})

export class FixedPhoneNumberFormatInputDirective {
  private startPosition = 6;
  private phoneNum: string;
  
  constructor(
    private callUsModalWindowService: CallUsModalWindowService
  ) {}

  @HostListener('focusout', ['$event.target'])
  onFocusOut(input: HTMLInputElement): void {
    const currentValue: string = input.value;

    if(currentValue.startsWith('+38 (0__) ___-__-__')){
      input.value = '';
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(input: HTMLInputElement): void {
    const currentValue: string = input.value;

    if(!currentValue.startsWith('+38 (0')){
      input.value = '+38 (0__) ___-__-__';      
    }

    this.setCurrentPosition(input, this.startPosition);
  }

  //keydown
  @HostListener('keyup', ['$event'])
  onKeyUp(event: any): void {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
    const inputAllowed = /[0-9]/;
    
    let inputValue = event.target.value;

    if (!allowedKeys.includes(event.key) && !inputAllowed.test(event.key)) {
      event.preventDefault();
    }else if(inputValue.includes('_')){
      this.phoneNum = '';
      this.callUsModalWindowService.isCorrectPhoneNum = false;

      const underscoreIdx = inputValue.indexOf('_');
      
      if(underscoreIdx === 6 && event.key === 'Backspace'){
        event.preventDefault();
      } else{
        inputValue = inputValue.split('');        

        if(event.key === 'Backspace'){
          // for(let elIdx = 19; elIdx >= this.startPosition; elIdx--){            
          //   if(!isNaN(inputValue[elIdx]) && inputValue[elIdx] !== ' '){
              
          //     inputValue[elIdx] = '_';
          //     console.log(inputValue);
              
          //     const position = underscoreIdx - 1;
          //     event.target.value = inputValue.join('');
          
          //     this.setCurrentPosition(event.target, position);

          //     // this.joinInputValue(event.target, inputValue, position);
          //     break;
          //   }
          // }
          inputValue.forEach((el, elIdx) => {
            const lastIndexOfNumber = inputValue.lastIndexOf(inputValue.find(num => !isNaN(el)));

            
            if(!isNaN(el) && elIdx >= 6 && el !== ' '){
              inputValue[elIdx] = '_';

              const position = underscoreIdx - 1;
              this.joinInputValue(event.target, inputValue, position);
              
              //place on the last position of not NaN el
              
              
            }
            
          });
        } else {
          inputAllowed.test(event.key) ? inputValue[underscoreIdx] = event.key : false;
          const position = underscoreIdx + 1;
          
          this.joinInputValue(event.target, inputValue, position);
        }
        
      }
    }
        
    if(inputValue[18] !== '_'){
      this.callUsModalWindowService.setPhoneNum(event.target.value);
      this.callUsModalWindowService.isCorrectPhoneNum = true;
    }
  }

  private joinInputValue(eventTarget: any, inputValue: any, position: number){
    eventTarget.value = inputValue.join('');
          
    this.setCurrentPosition(eventTarget, position);
  }

  private setCurrentPosition(input: HTMLInputElement, position: number): void {
    input.focus();
    input.setSelectionRange(position, position);
  }

  public getPhoneNum(){
    console.log(this.phoneNum);
    
    return this.phoneNum;
  }
}
