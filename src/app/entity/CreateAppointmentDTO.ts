import { ApplicationInitStatus } from "@angular/core";
import { AppoitmentType } from "./AppointmentDTO";

export enum AppoitmentDuration {
    LONG,
    SHORT
}

export class CreateAppointmentDTO{

    patientPhoneNumber: string;
    startDateTime: Date;
    duration: AppoitmentDuration;
    type: AppoitmentType

    constructor(
        patientPhoneNumber: string,
        startDateTime: Date,
        duration: AppoitmentDuration,
        type: AppoitmentType
    ){
        this.patientPhoneNumber = patientPhoneNumber;
        this.startDateTime = startDateTime;
        this.duration = duration;
        this.type = type;
    }

}