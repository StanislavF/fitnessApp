import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserHttpService } from '../../../shared/services/http-services/user-http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { SexSearchEnum } from '../../../shared/models/enums/sexSearchEnum.enum';
import { GoalEnum } from '../../../shared/models/enums/goalEnum.enum';
import { UtilsService } from '../../../shared/services/utils-service.service';
import { NavigService } from '../../../shared/services/navig-service.service';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  public user: User;
  public userCopy: User;
  public image: File;
  public imageUrl;

  public dropdownOptionsSex: SelectItem[];
  public dropdownSelectedSexOption: string;

  public dropdownOptionsGoal: SelectItem[];
  public dropdownSelectedGoalOption: string;

  constructor(
    public bsProfileModalRef: BsModalRef,
    private userHttpService: UserHttpService,
    private utilsService: UtilsService,
    private navigService: NavigService
  ) {
    this.userCopy = new User();

    this.dropdownOptionsSex = [
      { label: SexSearchEnum.BOTH, value: SexSearchEnum.BOTH },
      { label: SexSearchEnum.FEMALE, value: SexSearchEnum.FEMALE },
      { label: SexSearchEnum.MALE, value: SexSearchEnum.MALE }
    ];
    this.dropdownOptionsGoal = [
      { label: GoalEnum.MAINTENANCE, value:  GoalEnum.MAINTENANCE},
      { label: GoalEnum.WEIGHT_GAIN, value:  GoalEnum.WEIGHT_GAIN},
      { label: GoalEnum.FAST_WEIGHT_GAIN, value:  GoalEnum.FAST_WEIGHT_GAIN},
      { label: GoalEnum.WEIGHT_LOSS, value:  GoalEnum.WEIGHT_LOSS},
      { label: GoalEnum.FAST_WEIGHT_LOSS, value:  GoalEnum.FAST_WEIGHT_LOSS}
    ];
   }

  ngOnInit() {
    this.imageUrl = this.user.image;
    this.dropdownSelectedGoalOption = this.user.goal!=null ? this.user.goal : GoalEnum.MAINTENANCE;
    this.dropdownSelectedSexOption = this.user.sex!=null ? this.user.sex : SexSearchEnum.BOTH;

    Object.assign(this.userCopy, this.user);
  }

  hideModalProfileModal() {
    this.bsProfileModalRef.hide();
    this.navigService.goToAccProfile();
  }

  onSave() {
    if (window.confirm("Are you sure?")) {
      this.userCopy.sex = this.dropdownSelectedSexOption;
      this.userCopy.goal = this.dropdownSelectedGoalOption; 
      this.userCopy.image="";
      this.userHttpService.updateUser(this.userCopy, this.image).subscribe(
        result => {
          this.hideModalProfileModal();
          Object.assign(this.user, this.userCopy);
          this.user.image = this.imageUrl;
        },
        errorResponse => {
          if(errorResponse.error === "CLIENTS_EXIST"){
            window.alert("You can't change your trainer status, before removing all your clients");
          } else if (errorResponse.error === "CLIENTS_REQUESTS_EXIST"){
            window.alert("You can't change your trainer status, while still having pending client requests");
          }
        }
      );
    }
  }

  onImageChanged(event) {


    if (event.target.files[0] && event.target.files[0]) {
      this.image = event.target.files[0];


      var reader = new FileReader();

      reader.onloadend = status => {

        this.imageUrl = reader.result;
      };

      // read the image file as a data URL.
      reader.readAsDataURL(this.image);
    }

  }


}
