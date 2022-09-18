import { AppoitmentDuration } from "./CreateAppointmentDTO";
import { PatientDTO } from "./PatientDTO";

export enum AppoitmentType {
    
    TEETH_ClEANINGS,
    TEETH_WHITENING,
    EXTACTIONS,
    VENEERS,
    CROWNS,
    ROOT_CANAL

}

export class AppointmentDTO {

    id: number;
    patient: PatientDTO;
    startDateTime: Date;
    duration: number;
    type: AppoitmentType;
    mine: boolean;

    constructor(
        id: number,
        patient: PatientDTO,
        startDateTime: Date,
        duration: AppoitmentDuration,
        type: AppoitmentType,
        mine: boolean

    ){
        this.id = id;
        this.patient = patient;
        this.startDateTime = startDateTime;
        this.duration = duration;
        this.type = type;
        this.mine = mine;
    }

}