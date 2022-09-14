export enum AppoitmentDuration {
    LONG,
    SHORT
}

export class CreateAppointmentDTO{

    patientPhoneNumber: string;
    startDateTime: Date;
    duration: AppoitmentDuration;

    constructor(
        patientPhoneNumber: string,
        startDateTime: Date,
        duration: AppoitmentDuration,
    ){
        this.patientPhoneNumber = patientPhoneNumber;
        this.startDateTime = startDateTime;
        this.duration = duration;
    }

}