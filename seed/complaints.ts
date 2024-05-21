import { LocationOfIncident } from '@prisma/client'
import { prisma } from './prisma'

export async function createComplaints(studentId: string) {
    await prisma.methodOfResolution.createMany({
        data: [
            {
                name: 'Phone Call',
            },
            {
                name: 'Punishment',
            },
            {
                name: 'Face to Face Meeting',
            },
        ],
    })

    const Compensation = await prisma.methodOfResolution.create({
        data: {
            name: 'Compensation',
        },
    })

    await prisma.complaint.create({
        data: {
            description: 'My phone got stolen at school',
            date_of_incident: new Date(),
            locationOfIncident: LocationOfIncident.School_ClassRoom,
            methodOfResolutionId: Compensation.id,
            issuerId: studentId,
        },
    })
}
