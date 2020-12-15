import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ApiService {

   #apiUrl = 'http://localhost:3000/goals';

   constructor(private http: HttpClient) {

   }

   public getEntries() {
      return this.http.get(this.#apiUrl);
   }

   public addEntry(entry: string) {
      return this.http.post(this.#apiUrl, { text: entry });
   }

   public deleteAll() {
      return this.http.delete('http://localhost:3000/goals/all');
   }
}
