import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'ang-form-child-address-form',
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
    NoopAnimationsModule
  ],
  template: `
    <div [formGroup]="addressForm">
      <mat-card class="shipping-card">
        <mat-card-header>
          <mat-card-title>Shipping Information</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <input
                  matInput
                  placeholder="Company"
                  formControlName="company"
                />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <input
                  matInput
                  placeholder="First name"
                  formControlName="firstName"
                />
                <mat-error
                  *ngIf="addressForm.controls['firstName'].hasError('required')"
                >
                  First name is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <input
                  matInput
                  placeholder="Last name"
                  formControlName="lastName"
                />
                <mat-error
                  *ngIf="addressForm.controls['lastName'].hasError('required')"
                >
                  Last name is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <textarea
                  matInput
                  placeholder="Address"
                  formControlName="address"
                ></textarea>
                <mat-error
                  *ngIf="addressForm.controls['address'].hasError('required')"
                >
                  Address is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
          </div>
          <div class="row" *ngIf="!hasUnitNumber">
            <div class="col">
              <button
                mat-button
                type="button"
                (click)="hasUnitNumber = !hasUnitNumber"
              >
                + Add C/O, Apt, Suite, Unit
              </button>
            </div>
          </div>
          <div class="row" *ngIf="hasUnitNumber">
            <div class="col">
              <mat-form-field class="full-width">
                <textarea
                  matInput
                  placeholder="Address 2"
                  formControlName="address2"
                ></textarea>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <input matInput placeholder="City" formControlName="city" />
                <mat-error
                  *ngIf="addressForm.controls['city'].hasError('required')"
                >
                  City is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <mat-select placeholder="State" formControlName="state">
                  <mat-option
                    *ngFor="let state of states"
                    [value]="state.abbreviation"
                  >
                    {{ state.name }}
                  </mat-option>
                </mat-select>
                <mat-error
                  *ngIf="addressForm.controls['state'].hasError('required')"
                >
                  State is <strong>required</strong>
                </mat-error>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <input
                  matInput
                  #postalCode
                  maxlength="5"
                  placeholder="Postal Code"
                  type="number"
                  formControlName="postalCode"
                />
                <mat-hint align="end"
                  >{{ postalCode.value.length }} / 5</mat-hint
                >
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-radio-group formControlName="shipping">
                <mat-radio-button value="free">Free Shipping</mat-radio-button>
                <mat-radio-button value="priority"
                  >Priority Shipping</mat-radio-button
                >
                <mat-radio-button value="nextday"
                  >Next Day Shipping</mat-radio-button
                >
              </mat-radio-group>
            </div>
          </div>
          <p>Is Adress Form Valid: {{addressForm.valid}}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./child-address-form.component.scss'],
})
export class ChildAddressFormComponent implements OnInit{
  @Input() parentForm!: FormGroup;

  addressForm = new FormGroup({
    company: new FormControl( null),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    address2: new FormControl(null),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    postalCode: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ),
    shipping: new FormControl('free', Validators.required),
  });

  hasUnitNumber = false;

  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' },
  ];

  ngOnInit(): void {
    this.parentForm.addControl('addressForm', this.addressForm);
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
