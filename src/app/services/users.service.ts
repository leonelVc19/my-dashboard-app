import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService { //trabajar con signals 
  private http = inject( HttpClient ); // esto es con modulos

  #state = signal<State>({ //emmact script private
    loading: true,
    users: []
  });

  //Para poder ver se tiene que utilizar la se;ales computadas
  public users = computed( () => this.#state().users ); // lo pasamos a un lista de lectura ci
  public loading = computed( () => this.#state().loading ); 
  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) ) //hacer que espere 1.5s
      .subscribe( respones => {
        this.#state.set({
          loading: false,
          users: respones.data
        })
      })
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe( 
      delay(1500),  //hacer que espere 1.5s
      map( response => response.data )
    )
  }
  
}
