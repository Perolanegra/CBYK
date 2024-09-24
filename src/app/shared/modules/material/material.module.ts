import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const sharedModules = [MatButtonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [...sharedModules, CommonModule],
  exports: [...sharedModules],
})
export class MaterialModule {}
