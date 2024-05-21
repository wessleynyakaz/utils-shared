import { prisma } from './prisma'

export async function createSubjects(teacherIds: string[]) {
    const subj_names = [
        'Computer Science',
        'Mathematics',
        'Geography',
        'Biology',
        'Enviromental Management',
        'Humanities',
    ]

    const subj_ids = []

    for (let i = 0; i < subj_names.length; i++) {
        const subject = await prisma.subject.create({
            data: {
                name: subj_names[i],
                teacherId: teacherIds[i],
            },
        })

        subj_ids.push(subject.id)
    }

    return subj_ids
}
