import { Component, Input } from '@angular/core';

export interface TabBar {
  slot?: string;
  tabItems: TabItem[];
}

export interface TabItem {
  name: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.page.html',
  styleUrls: ['tab.page.scss'],
})
export class TabPage {
  // properties declarations
  @Input() tab!: TabBar[];

  constructor() {}
}
