export interface ExamResponsesType {
    examId: string,
    userId: string,
    organisationId: string,
    questionResponses: [QuestionResponseType],
}
export interface QuestionResponseType {
    questionId: string,
    sectionId: string,
    userAnswer: UserAnswerOption,
    subjectId: string,
    chapterId: string,
    timeTaken: string,
    allottedScore: number,
    negativeScore: number
}

export interface UserAnswerOption {
    id : string,
    value : string
}

export interface QuestionResponseType {
    questionId: string,
    sectionId: string,
    userAnswer: UserAnswerOption,
    subjectId: string,
    chapterId: string,
    timeTaken: string,
    allottedScore: number,
    negativeScore: number
}

// ExamQPanelType
// export interface ExamQPanelType {
//     examId: string,
//     examType: string,
//     userId: string,
//     questionPanel: [QuestionPanelType],
// }

export interface QuestionPanelType {
    isMFR: boolean,
    isAnswered: boolean,
    isVisited: boolean
}

// ExamMetaType
export interface ExamMetaType {
    totalExamTime: string,
    timeElapsed: string,
    language: string,
}
export class ExamResponse {
    examId: string;
    userId: string;
    organisationId: string;
    questionResponses: [QuestionResponseType];
    questionPanel: [QuestionPanelType];
    examMeta: ExamMetaType;
}

export class QuestionResponse implements QuestionResponseType{
    questionId: string;
    sectionId: string;
    userAnswer: UserAnswerOption;
    subjectId: string;
    chapterId: string;
    timeTaken: string;
    allottedScore: number;
    negativeScore: number;
    isSubmit: boolean;
}

export class QuestionPanel implements QuestionPanelType{
    isMFR: boolean;
    isAnswered: boolean;
    isVisited: boolean;
}

export class ExamMeta implements ExamMetaType{
    totalExamTime: string;
    timeElapsed: string;
    language: string;
}
