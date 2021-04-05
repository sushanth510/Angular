import { Directive, ElementRef ,HostListener,Input} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @Input() appHighlight:string=""
  constructor(private el:ElementRef,) {
      el.nativeElement.style.display="inline"
      
   }

   @HostListener('mouseenter') 
   onMouseEnter(){
        this.highlight("yellow")
   }

   @HostListener('mouseleave') 
   onMouseLeave(){
        this.highlight("green")
   }

   highlight(color:string){
     this.el.nativeElement.style.backgroundColor=color;
   }


}
