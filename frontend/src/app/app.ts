import { Component } from '@angular/core';
import { CanvasComponent } from './components/canvas/canvas';
import { ColorPaletteComponent } from './components/color-palette/color-palette';
import { GalleryComponent } from './components/gallery/gallery';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CanvasComponent,
    ColorPaletteComponent,
    GalleryComponent,
    MatToolbarModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
