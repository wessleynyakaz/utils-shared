import getRandomArbitraryNumber from '@/utils/getRandomArbitraryNumber'
import { prisma } from './prisma'

export async function createSubjectAttendency(
    studentId: string,
    subjectIds: string[],
) {
    for (var i = 0; i < subjectIds.length; i++) {
        await prisma.subjectAttendence.create({
            data: {
                subjectId: subjectIds[i],
                studentId: studentId,
                takenAt: new Date(`2023-12-${i + 1}`),
                record: Boolean(Math.floor(getRandomArbitraryNumber(0, 2))),
            },
        })
    }
}
