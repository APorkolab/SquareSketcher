import { Component } from '@angular/core';
import { CanvasComponent } from './components/canvas/canvas';
import { ColorPaletteComponent } from './components/color-palette/color-palette';
import { GalleryComponent } from './components/gallery/gallery';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CanvasComponent,
    ColorPaletteComponent,
    GalleryComponent,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
