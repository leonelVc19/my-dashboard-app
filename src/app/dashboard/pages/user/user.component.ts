import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title [title]="titleLabel()" />
    @if ( user() ) {
    <section class="">
      <img
        class="rounded"
        [srcset]="user()?.avatar"
        [alt]="user()?.first_name"
      />
      <div>
        <h4>{{ user()?.first_name }} {{ user()?.last_name }}</h4>
        <h6>{{ user()!.email }}</h6>
      </div>
    </section>
    } @else {
    <p>Cargando Usuario</p>
    }
  `,
  styles: ``,
})
export default class UserComponent {
  //Tomar argumento que viene por la url
  private router = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  //public user = signal<User | undefined>(undefined);  //en algun punto del tiempo esto estara vacio

  public user = toSignal(
    this.router.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  //titleLabel
  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del Usuario ${this.user()!.first_name} ${
        this.user()!.last_name
      }`;
    } else {
      return 'Informacion del Usuario';
    }
  });
}
