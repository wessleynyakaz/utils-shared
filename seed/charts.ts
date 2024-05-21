import { prisma } from './prisma'

export async function createCharts(studentId: string, meerusId: string) {
    await prisma.chart.create({
        data: {
            Student: {
                connect: [
                    {
                        id: studentId,
                    },
                    {
                        id: meerusId,
                    },
                ],
            },
        },
    })
}
