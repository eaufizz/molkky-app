import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent {
  showKnowledge: boolean = false;
  showMaster: boolean = false;
  showDiary: boolean = false;
  showInfo: boolean = false;
  showBoard: boolean = false;

  showKnowledgeTab(): void {
    this.showKnowledge = true;
  }

  hideKnowledgeTab(): void {
    this.showKnowledge = false;
  }

  showMasterTab(): void {
    this.showMaster = true;
  }

  hideMasterTab(): void {
    this.showMaster = false;
  }

  showDiaryTab(): void {
    this.showDiary = true;
  }

  hideDiaryTab(): void {
    this.showDiary = false;
  }

  showInfoTab(): void {
    this.showInfo = true;
  }

  hideInfoTab(): void {
    this.showInfo = false;
  }

  showBoardTab(): void {
    this.showBoard = true;
  }

  hideBoardTab(): void {
    this.showBoard = false;
  }
}
