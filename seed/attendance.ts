import { AttendanceStatus } from '@prisma/client'
import { prisma } from './prisma'

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}

export async function createAttendance(studentId: string) {
    const term1 = await prisma.term.create({
        data: {
            num: 1,
            startDate: new Date('2024-01-09'),
            endDate: new Date('2024-03-27'),
            schoolDays: 78,
        },
    })
    const term2 = await prisma.term.create({
        data: {
            num: 2,
            startDate: new Date('2024-05-05'),
            endDate: new Date('2024-08-08'),
            schoolDays: 95,
        },
    })

    const terms = [term1, term2]

    const attendanceStatuses = [
        AttendanceStatus.present,
        AttendanceStatus.absent,
        AttendanceStatus.absentE,
        AttendanceStatus.tardy,
        AttendanceStatus.tardyE,
    ]

    const attendanceData: any[] = []
    for (const term of terms) {
        for (let i = 0; i < term.schoolDays; i++) {
            const date = new Date(term.startDate)
            date.setDate(date.getDate() + i)

            if (date <= term.endDate) {
                attendanceData.push({
                    date,
                    status: attendanceStatuses[
                        getRandomInt(attendanceStatuses.length)
                    ],
                    studentId,
                    termId: term.id,
                })
            }
        }
    }

    await prisma.attendance.createMany({
        data: attendanceData,
    })

    return term1.id
}
