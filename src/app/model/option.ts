/*
* @Auteur BEN LAHMAR
*/
export class Option {
    id: number;
    questionId: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;//true:lorsqu'elleest selectioné
    state:string;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
        this.selected=false;
        this.state='off';
    }
}
