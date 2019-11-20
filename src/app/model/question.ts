import { Option } from './option';
/*
* @Auteur BEN LAHMAR
*/
export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean;//true lorsuqu il y une rep
    isCorrect:boolean;
    state:string;
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
        this.state='off';
        this.answered=false;
        this.isCorrect=false;
    }
}
