import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ CommonModule , TitleComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush, // en menos siclos de vida de la aplicacion
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed( () => `Change Detection - ${ this.frameworkasSignal().name}`)

  public frameworkasSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkasPropertie = {
    name: 'Angular',
    releaseDate: 2016
  };


  constructor () {
    setTimeout(() => {
      console.log('Hola 3s');
      //this.frameworkasPropertie.name = 'React';
      this.frameworkasSignal.update( value => {
        value.name = 'React';
        return {...value}
      });
      
    }, 3000);
  }
}
