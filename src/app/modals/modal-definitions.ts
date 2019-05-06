export interface StudentExamResponsesType  {
    examId: number;
    examType: String;
    userId: number;
    questionPanel: [QuestionPanelObjType]
}

export interface QuestionPanelObjType{
    questionId: number;
    user_response: String;
}
