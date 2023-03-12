import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChildAddressFormComponent } from '../child-address-form/child-address-form.component';

@Component({
  selector: 'ang-form-parent-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ChildAddressFormComponent,
    NoopAnimationsModule,
  ],
  template: `
    <form [formGroup]="parentForm" novalidate (ngSubmit)="onSubmit()">
      <mat-card class="shipping-card">
        <mat-card-content>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <input
                  matInput
                  placeholder="Asiret name"
                  formControlName="asiretName"
                />
                <mat-error
                  *ngIf="parentForm.controls['asiretName'].hasError('required')"
                >
                  Asiret name is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
          </div>
          <ang-form-child-address-form [parentForm]="parentForm" />
          <p>Is Parent Form Valid: {{ parentForm.valid }}</p>
          <p>Is Child Address Form Valid: {{ childAddressFormGroup?.valid }}</p>
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="!this.parentForm.valid"
          >
            Submit
          </button>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styleUrls: ['./parent-form.component.scss'],
})
export class ParentFormComponent implements AfterViewInit {
  parentForm = new FormGroup({
    asiretName: new FormControl(null, Validators.required),
  });

  childAddressFormGroup!: FormGroup;
  constructor() {}
  ngAfterViewInit(): void {
    this.childAddressFormGroup = (this.parentForm as any).controls[
      'addressForm'
    ] as FormGroup;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
