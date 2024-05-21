import { prisma } from "./prisma";

export async function createQuizzes() {
    const questions = [
        {
            question: "What motivates you most in a career?",
            answers: [
                { text: "Helping others", skills: ["Communication", "Empathy"] },
                { text: "Solving complex problems", skills: ["Analytical", "Problem-solving"] },
                { text: "Leading and managing teams", skills: ["Leadership", "Management"] },
                { text: "Creative expression", skills: ["Creativity", "Innovation"] },
            ]
        },
        {
            question: "What type of work environment do you prefer?",
            answers: [
                { text: "Office setting", characteristics: ["Organized", "Structured"] },
                { text: "Outdoors or in the field", characteristics: ["Adventurous", "Flexible"] },
                { text: "Creative studio or workshop", characteristics: ["Creative", "Innovative"] },
                { text: "Fast-paced and dynamic environment", characteristics: ["Adaptable", "Resilient"] },
            ]
        },
        {
            question: "What are your strengths?",
            answers: [
                { text: "Communication and teamwork", skills: ["Communication", "Teamwork"] },
                { text: "Analytical and problem-solving skills", skills: ["Analytical", "Problem-solving"] },
                { text: "Creativity and innovation", skills: ["Creativity", "Innovation"] },
                { text: "Leadership and strategic thinking", skills: ["Leadership", "Strategic thinking"] },
            ]
        },
        {
            question: "What drives you forward in education?",
            answers: [
                { text: "Personal growth and development", characteristics: ["Motivated", "Ambitious"] },
                { text: "Career advancement and opportunities", characteristics: ["Driven", "Focused"] },
                { text: "Making a positive impact in society", characteristics: ["Compassionate", "Socially aware"] },
                { text: "Pursuing a passion or interest", characteristics: ["Curious", "Enthusiastic"] },
            ]
        },
        // Add more questions and answers here
    ]

    await prisma.careerPathQuiz.create({ data: { id: "quizId", } })

    for (let i = 0; i < questions.length; i++) {
        const q = await prisma.careerPathQuizQuestion.create({ data: { careerPathQuizId: "quizId", question: questions[i].question } })
        await prisma.careerPathQuizQuestionAnswer.createMany({
            data: questions[i].answers.map(ans => ({ ...ans, careerPathQuizQuestionId: q.id }))
        })
    }
}