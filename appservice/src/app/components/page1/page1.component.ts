import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
   selector: 'app-page1',
   templateUrl: './page1.component.html',
   styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

   title = 'appservice';
   storedEntries;
   newEntry: string = '';

   constructor(private apiService: ApiService) { }

   ngOnInit(): void {
      this.updateStoredEntries();
   }

   public addEntry(): void {
      if (this.newEntry !== '') {
         console.log('appservice - adding new entry');
         this.apiService.addEntry(this.newEntry).subscribe(() => {
            this.updateStoredEntries();
         });
         this.newEntry = '';
      }
   }

   public deleteAll(): void {
      this.apiService.deleteAll().subscribe(() => {
         this.updateStoredEntries();
      });
   }

   private updateStoredEntries(): void {
      console.log('appservice - loading entries');
      this.apiService.getEntries().subscribe((storedEntries: any) => {
         console.log('appservice - retrieved entries: ', storedEntries);
         this.storedEntries = storedEntries.goals;
      })
   }
}
