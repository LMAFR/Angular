import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
  }

  onSelect(feature:string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
