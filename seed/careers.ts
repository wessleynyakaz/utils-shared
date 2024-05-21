import { CareerCategory } from "@prisma/client";
import { prisma } from "./prisma";

export async function createCareers() {
    await prisma.careerRequirement.createMany({
        data: [
            {
                id: '1',
                degree: 'Bachelors in Science in Software Engineering',
                oLevel: ['English', 'Maths', 'Computer Science'],
                aLevel: ['Physics', 'Maths', 'Computer Science'],
            },
            {
                id: '2',
                degree: 'Bachelors in Arts in Graphic Design',
                oLevel: ['English', 'Art', 'Design'],
                aLevel: ['Graphic Design', 'Digital Media', 'Fine Arts'],
            },
            {
                id: '3',
                degree: 'Bachelors in Science in Data Science',
                oLevel: ['English', 'Maths', 'Statistics'],
                aLevel: ['Data Analysis', 'Machine Learning', 'Computer Science'],
            },
            {
                id: '4',
                degree: 'Bachelors in Arts in Digital Marketing',
                oLevel: ['English', 'Marketing', 'Business'],
                aLevel: ['Digital Marketing', 'Social Media', 'E-commerce'],
            },
        ]
    })

    await prisma.career.createMany({
        data: [
            {
                id: '1',
                category: CareerCategory.SCIENCES,
                title: "Software Engineer",
                description: "Designing, building and developing software",
                requirementId: '1',
                skills: ["Programming", "Problem-solving", "Communication", "Teamwork"],
                characteristics: ["Analytical", "Logical", "Creative", "Adaptable"],
                incentives: ['Earn $120,000 per year', 'Paid Leave for 30 days per year'],
                jobListings: ['Software Engineer at ABC Tech (San Francisco, CA)', 'Senior Software Engineer at DEF Corporation (New York, NY)'],
            },
            {
                id: '2',
                category: CareerCategory.ARTS,
                title: "Graphic Designer",
                description: "Creating visual content for various mediums",
                requirementId: '2',
                skills: ["Creativity", "Design", "Communication", "Attention to detail"],
                characteristics: ["Innovative", "Artistic", "Flexible", "Organized"],
                incentives: ['Earn $80,000 per year', 'Paid Leave for 20 days per year'],
                jobListings: ['Graphic Designer at GHI Agency (Los Angeles, CA)', 'Senior Graphic Designer at JKL Studio (Chicago, IL)'],
            },
            {
                id: '3',
                category: CareerCategory.SCIENCES,
                title: "Data Scientist",
                description: "Analyzing and interpreting complex data",
                requirementId: '3',
                skills: ["Data analysis", "Machine learning", "Statistics", "Communication"],
                characteristics: ["Analytical", "Logical", "Curious", "Problem-solving"],
                incentives: ['Earn $150,000 per year', 'Paid Leave for 30 days per year'],
                jobListings: ['Data Scientist at MNO Corporation (San Francisco, CA)', 'Senior Data Scientist at PQR Inc (New York, NY)'],
            },
            {
                id: '4',
                category: CareerCategory.ARTS,
                title: "Digital Marketing Specialist",
                description: "Developing and implementing digital marketing campaigns",
                requirementId: '4',
                skills: ["Marketing", "Communication", "Creativity", "Analytical"],
                characteristics: ["Innovative", "Flexible", "Adaptable", "Results-driven"],
                incentives: ['Earn $90,000 per year', 'Paid Leave for 25 days per year'],
                jobListings: ['Digital Marketing Specialist at RST Agency (Los Angeles, CA)', 'Senior Digital Marketing Specialist at UVW Studio (Chicago, IL)'],
            },
        ]
    })

    await prisma.careerTestimonial.createMany({
        data: [
            {
                name: 'Wessley Newton',
                quote: 'An easy, productive tiled path for success',
                company: 'Comrade Inc',
                careerId: '1'
            },
            {
                name: 'Emily Chen',
                quote: 'A creative and fulfilling journey in graphic design',
                company: 'GHI Agency',
                careerId: '2'
            },
            {
                name: 'David Lee',
                quote: 'A challenging and rewarding career in data science',
                company: 'MNO Corporation',
                careerId: '3'
            },
            {
                name: 'Sophia Patel',
                quote: 'A dynamic and exciting path in digital marketing',
                company: 'RST Agency',
                careerId: '4'
            },
        ]
    })
}