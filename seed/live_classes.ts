import { addDays, format } from 'date-fns'
import { prisma } from './prisma'

type Param = {
    teacher_id: string
    subject_id: string
}

export async function createLiveClasses(data: Param[]) {
    const currentDate = new Date()
    const daysToAdd = Math.floor(Math.random() * 6) + 2 // Randomly select a number between 2 and 7

    const startHour = 9
    const endHour = 17
    const lessonDuration = 30 // minutes

    await prisma.liveClass.createMany({
        data: [
            {
                name: 'Web Designing',
                subjectId: data[0].subject_id,
                description:
                    'Introduction to web design by looking at real-world apps',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour,
                            0,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour,
                            lessonDuration,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[0].teacher_id,
            },
            {
                name: 'Advanced CSS Techniques',
                subjectId: data[0].subject_id,
                description: 'Exploring advanced CSS concepts and techniques',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour + 1,
                            0,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour + 1,
                            lessonDuration,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[0].teacher_id,
            },
            {
                name: 'Mathematics Fundamentals',
                subjectId: data[1].subject_id,
                description: 'Covering fundamental concepts in mathematics',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(11, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(13, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[1].teacher_id,
            },
            {
                name: 'Geography Explorations',
                subjectId: data[2].subject_id,
                description: 'Exploring geographical landscapes and cultures',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(14, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(16, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[2].teacher_id,
            },
            {
                name: 'Biology Basics Workshop',
                subjectId: data[3].subject_id,
                description: 'Introduction to basic concepts in biology',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 1).setHours(9, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 1).setHours(11, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[3].teacher_id,
            },
            {
                name: 'Frontend Frameworks Overview',
                subjectId: data[0].subject_id,
                description:
                    'Exploring popular frontend frameworks such as React and Vue',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 2).setHours(10, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 2).setHours(12, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[0].teacher_id,
            },
            {
                name: 'Introduction to Environmental Science',
                subjectId: data[4].subject_id,
                description:
                    'Understanding the principles of environmental science',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 3).setHours(13, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 3).setHours(15, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[4].teacher_id,
            },
            {
                name: 'Algebraic Concepts Masterclass',
                subjectId: data[1].subject_id,
                description:
                    'In-depth study of algebraic concepts and problem-solving',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 4).setHours(11, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd + 4).setHours(13, 0, 0),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[1].teacher_id,
            },
            {
                name: 'Introduction to World Cultures',
                subjectId: data[5].subject_id,
                description:
                    'Exploring diverse cultures and traditions around the world',
                startDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour,
                            0,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                endDate: new Date(
                    format(
                        addDays(currentDate, daysToAdd).setHours(
                            startHour,
                            lessonDuration,
                            0,
                        ),
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                ),
                teacherId: data[5].teacher_id,
            },
        ],
    })
}
