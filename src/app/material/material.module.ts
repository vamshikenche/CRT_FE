import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCardModule, 
  MatDialogModule, 
  MatInputModule, 
  MatTableModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatProgressSpinnerModule, 
  MatCheckboxModule, 
  MatTabsModule, 
  MatRadioModule, 
  MatProgressBarModule, 
  MatSidenavModule, MatDividerModule 
} from'@angular/material';

const MaterialComponents = [
  MatButtonModule, 
  MatCardModule, 
  MatDialogModule, 
  MatInputModule, 
  MatTableModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatProgressSpinnerModule, 
  MatCheckboxModule, 
  MatTabsModule, 
  MatRadioModule, 
  MatProgressBarModule, 
  MatSidenavModule, 
  MatDividerModule ];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
