import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contactJobTitle: new FormControl(''),
    contactEmail: new FormControl(''),
    contactPhone: new FormControl(''),
    companyName: new FormControl(''),
    organizationAddress: new FormControl(''),
    organizationWebsite: new FormControl(''),
     projectTitle: new FormGroup({
      descriptionOfProject: new FormControl(''),
      studentDuties: new FormControl(''),
      state: new FormControl(''),
      learningBenefits: new FormControl(''),
      providedEquipment: new FormControl('')
    })
  });

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
}
