import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'dark' | 'light' = 'dark';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      this.theme = savedTheme;
      document.documentElement.setAttribute('data-bs-theme', this.theme);
    }
  }

  getTheme(): 'dark' | 'light' {
    return this.theme;
  }
}
