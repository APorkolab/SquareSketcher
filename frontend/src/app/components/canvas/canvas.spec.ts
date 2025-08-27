import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasComponent } from './canvas';
import { ApiService, PixelArt } from '../../services/api';
import { ArtService } from '../../services/art';
import { ColorService } from '../../services/color';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let artServiceSpy: jasmine.SpyObj<ArtService>;
  let colorServiceSpy: jasmine.SpyObj<ColorService>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['savePixelArt']);
    artServiceSpy = jasmine.createSpyObj('ArtService', ['artToLoad']);
    (Object.getOwnPropertyDescriptor(artServiceSpy, 'artToLoad')?.get as jasmine.Spy<() => any>).and.returnValue(() => null);
    colorServiceSpy = jasmine.createSpyObj('ColorService', ['selectedColor']);
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [CanvasComponent, NoopAnimationsModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ArtService, useValue: artServiceSpy },
        { provide: ColorService, useValue: colorServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not save art if name is missing', () => {
    component.artName = '';
    component.saveArt();
    expect(apiServiceSpy.savePixelArt).not.toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith('Please enter a name for your art.', 'Close', { duration: 3000 });
  });

  it('should save art if name is present', () => {
    const mockArt: PixelArt = { name: 'Test Art', pixels: component.pixels };
    apiServiceSpy.savePixelArt.and.returnValue(of(mockArt));
    component.artName = 'Test Art';
    component.saveArt();
    expect(apiServiceSpy.savePixelArt).toHaveBeenCalledWith({ name: 'Test Art', pixels: component.pixels });
    expect(snackBarSpy.open).toHaveBeenCalledWith('Art saved!', 'Close', { duration: 3000 });
  });
});
