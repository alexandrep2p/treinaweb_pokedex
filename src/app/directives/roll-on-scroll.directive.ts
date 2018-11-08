//diretiva pra fazer a animação da pokebola ao scrolar a pagina
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[rollOnScroll]'
})
export class RollOnScrollDirective {

  //evento que o listener fica esperando para fazer a função
  //quando a janela é scroolada, a função onWindowScroll é feita
  @HostListener('window:scroll', []) onWindowScroll(){
    //rotação da pokebola
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
    
    //pegar o elemento pra fazer a alteração, recomendado usar renderer2
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      rotation
      )
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
