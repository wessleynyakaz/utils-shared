import getRandomArbitraryNumber from '@/utils/getRandomArbitraryNumber'
import { prisma } from './prisma'
import { addDays, format } from 'date-fns'

export async function createPerformance(studentId: string) {
    var testIds = []

    const query = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        select: {
            liveClasses: {
                select: {
                    id: true,
                    subjectId: true,
                },
            },
        },
    })
    const classes = query?.liveClasses ?? []
    for (let i = 0; i < classes.length; i++) {
        const d = format(addDays(new Date('2024-01-01'), i), 'yyyy-MM-dd')
        const date = new Date(d)
        let test = await prisma.classTest.create({
            data: {
                date: date,
                outOf: 50,
                subjectId: classes[i].subjectId,
                LiveClass: {
                    connect: {
                        id: classes[i].id,
                    },
                },
            },
        })
        testIds.push({
            id: test.id,
            outOf: test.outOf,
        })
    }

    for (let i = 0; i < testIds.length; i++) {
        await prisma.classTestMark.create({
            data: {
                studentId: studentId,
                testId: testIds[i].id,
                mark: getRandomArbitraryNumber(0, testIds[i].outOf),
            },
        })
    }
}
