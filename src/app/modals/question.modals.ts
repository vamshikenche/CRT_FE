export const MCQ = [
    {
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 1,
    "questionType": 1,
    "question": {
        "referenceText": "",
        "questionText": "1. A is the father of two sisters B and C; E is the mother of C; F is brother of E; and D is the wife of F. How B is related to F?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "2.Nephew",
        }, {
            "optionId": "2",
            "optionText": "Niece",
        }, {
            "optionId": "3",
            "optionText": "Daughter",
        }, {
            "optionId": "4",
            "optionText": "Son",
        }
    ]
},{
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 2,
    "questionType": 1,
    "question": {
        "referenceText": "",
        "questionText": "2. A is the father of two sisters B and C; <br/>E is the mother of C; <br>F is brother of E; <br> D is the wife of F. <br/>How B is related to F?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "Nephew",
        }, {
            "optionId": "2",
            "optionText": "Niece",
        }, {
            "optionId": "3",
            "optionText": "Daughter",
        }, {
            "optionId": "4",
            "optionText": "Son",
        }
    ]
},{
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 3,
    "questionType": 2,
    "groupId": 3,
    "groupData" : {
        "groupText" : "<span>Study the following graph carefully and answer the questions given below. Expenditure and income of five families.</span><br><img style=\"width:50%;display:block;margin:0 auto;\" src=\"assets/145_0.gif\" style=\"text-align:center;\">"
    },
    "question": {
        "referenceText": "",
        "questionText": "3. Give the family which spends more money than it earns?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "A",
        }, {
            "optionId": "2",
            "optionText": "B",
        }, {
            "optionId": "3",
            "optionText": "C",
        }, {
            "optionId": "4",
            "optionText": "D",
        }
    ],
    "explanation" : "This is explanation to the above question.",
    "answer": "1"
},{
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 4,
    "questionType": 1,
    "question": {
        "referenceText": "",
        "questionText": "4. A is the father of two sisters B and C; E is the mother of C; F is brother of E; and D is the wife of F. How B is related to F?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "2.Nephew",
        }, {
            "optionId": "2",
            "optionText": "Niece",
        }, {
            "optionId": "3",
            "optionText": "Daughter",
        }, {
            "optionId": "4",
            "optionText": "Son",
        }
    ]
},{
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 5,
    "questionType": 1,
    "question": {
        "referenceText": "",
        "questionText": "5. A is the father of two sisters B and C; <br/>E is the mother of C; <br>F is brother of E; <br> D is the wife of F. <br/>How B is related to F?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "Nephew",
        }, {
            "optionId": "2",
            "optionText": "Niece",
        }, {
            "optionId": "3",
            "optionText": "Daughter",
        }, {
            "optionId": "4",
            "optionText": "Son",
        }
    ]
},{
    "subjectID": 1,
    "chapterID": 1,
    "topicID": 1,
    "questionId": 6,
    "questionType": 2,
    "groupId": 3,
    "groupData" : {
        "groupText" : "<span>Study the following graph carefully and answer the questions given below. Expenditure and income of five families.</span><br><img style=\"width:50%;display:block;margin:0 auto;\" src=\"assets/145_0.gif\" style=\"text-align:center;\">"
    },
    "question": {
        "referenceText": "",
        "questionText": "6. Give the family which spends more money than it earns?"
    },
    "options": [
        {
            "optionId": "1",
            "optionText": "A",
        }, {
            "optionId": "2",
            "optionText": "B",
        }, {
            "optionId": "3",
            "optionText": "C",
        }, {
            "optionId": "4",
            "optionText": "D",
        }
    ],
    "explanation" : "This is explanation to the above question.",
    "answer": "1"
}];

enum QUESTION_RESPONSES {
    ANSWERED = 1,
    ANSWERED_REVIEW,
    NOT_ANSWERED_REVIEW,
    NOT_ANSWERED,
    NOT_VISITED,
}

export const STUDENT_QUESTION_RESPONSES = {
    examId: 1234,
    examType: "2",
    userId: "4321",
    questionPanel: [
        {
            questionId: 1,
            isMFR: false,
            isAnswered: false,
            isVisited: false,

        },
        {
            questionId: 2,
            isMFR: false,
            isAnswered: false,
            isVisited: false,
        },
        {
            questionId: 3,
            isMFR: false,
            isAnswered: false,
            isVisited: false,
        },
        {
            questionId: 4,
            isMFR: false,
            isAnswered: false,
            isVisited: false,
        },
        {
            questionId: 5,
            isMFR: false,
            isAnswered: false,
            isVisited: false,
        },
        {
            questionId: 6,
            isMFR: false,
            isAnswered: false,
            isVisited: false,
        }
    ]
}
