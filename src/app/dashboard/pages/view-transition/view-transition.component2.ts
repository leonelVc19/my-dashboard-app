import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title title="View Transition 2" />

    <hr />
    <!-- SE anima con la animacion -->

    <section class="flex justify-end">
      <img
        class="rounded-xl"
        alt="Texto"
        width="400"
        height="300"
        srcset="
          https://i0.wp.com/senpai.com.mx/wp-content/uploads/2022/09/Komi-llega-al-Conalep-con-este-fanart-de-Komi-Cant-Communicate.jpg
        "
        style="view-transition-name: hero1;"
      />
      <div 
      style="view-transition-name: hero2;"
      class="fixed bottom-16 right-10 bg-blue-800 w-36 h-36 rounded"></div>
    </section>
  `,
})
export default class ViewTransitionComponent2 {}
