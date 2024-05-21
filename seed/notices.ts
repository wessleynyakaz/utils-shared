import { prisma } from './prisma'

export async function createNotices(
    id: string,
    geoId: string,
    images: string[],
) {
    await prisma.notice.createMany({
        data: [
            {
                studentId: id,
                message: 'Submit Geo Work',
                type: 'ASSIGNMENT',
                asgnId: geoId,
                issuer_image: images[0],
            },
            {
                studentId: id,
                message: 'Wear Sports Ware tomorrow',
                issuer_image: images[1],
            },
            {
                studentId: id,
                message: 'No school on Friday',
                issuer_image: images[1],
            },
        ],
    })
}
