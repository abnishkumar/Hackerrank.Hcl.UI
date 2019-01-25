import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FlightSearchService } from 'src/app/services/flight-search.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private fs: FlightSearchService) { }

  group: FormGroup;
  minDate = new Date().toISOString().split('T')[0];
  flightResult: Observable<any>;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.group = this.formBuilder.group({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      departDate: new FormControl(this.minDate, Validators.required)
    });
  }

  onClick() {
    if (this.group.valid && this.group.dirty) {
      console.log('controls', this.group.controls);
      this.flightResult = this.fs.getData(this.group.controls.from.value,
        this.group.controls.to.value, this.group.controls.departDate.value);
    } else {
      alert('Invalid request');
    }
  }
  onLoadClick() {
    this.flightResult = this.fs.getData(null, null, null);
  }
}
