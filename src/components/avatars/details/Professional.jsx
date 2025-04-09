import React from 'react'

import {Card} from "@/components/ui/card.jsx"

// const persona = {
//     name: "Ravi Kumar",
//     twoOrThreeLinerDescription:
//       "Ravi is a 28-year-old tech enthusiast facing premature hair loss, seeking personalized solutions to regain his confidence and improve his appearance. He's motivated by the desire to find a solution tailored to his specific needs.",
//     ageRange: "25-30",
//     gender: "Male",
//     location: "Bangalore, India",
//     maritalStatus: "Single",
//     incomeLevel: "5-10 LPA",
//     educationLevel: "Bachelor's",
//     jobTitle: "Software Engineer",
//     industry: "Information Technology",
//     goalsAndAspirations: {
//       primaryGoal:
//         "To regain a full head of hair and feel confident in social and professional settings.",
//       secondaryGoals: [
//         "To learn about the best hair care practices and products for hair regrowth.",
//         "To maintain a trendy and youthful appearance to impress in dating scenarios.",
//       ],
//       longTermVision:
//         "To achieve long-term hair health and adopt a lifestyle that prevents further hair loss.",
//     },
//     painPointsAndChallenges: {
//       biggestProblems: [
//         "Experiencing thinning hair and bald patches at a young age.",
//         "Feeling less attractive and facing confidence issues during social interactions.",
//         "Limited awareness of effective treatments suited for Indian hair types.",
//       ],
//       frustration: [
//         "Finding product recommendations that are generic and not tailored to individual needs.",
//         "Wasting money on ineffective treatments and gimmicks.",
//         "Dealing with unsolicited advice from friends and family about hair loss remedies.",
//       ],
//       commonObjections: [
//         "Concern about the efficacy of personalized coaching versus over-the-counter solutions.",
//         "Skepticism about whether a coach can truly understand and address his specific situation.",
//         "Worry about the costs involved with personalized services.",
//       ],
//     },
//     buyingBehaviour: {
//       platforms: ["Instagram", "YouTube", "Online Forums related to Hair Loss"],
//       influencersFollowed: [
//         "Dr. Sandeep Attavar (Dermatologist)",
//         "Men's Grooming Influencers like GQ India and The Man Magazine",
//       ],
//       contentTypes: [
//         "How-to videos",
//         "Success stories from real users",
//         "Hair care product reviews",
//       ],
//       decisionMakingProcess: [
//         "Researches extensively online, reads reviews and testimonials, compares treatments, and seeks social proof before making purchasing decisions.",
//       ],
//     },
//     psychologicalTriggers: {
//       emotionalTriggers: [
//         "Fear of being judged for appearance and self-esteem issues.",
//         "Desire for acceptance and validation from peers, especially on social media.",
//         "Hope and excitement about possible positive change.",
//       ],
//       logicalTriggers: [
//         "Evidence of product effectiveness suggested by real testimonials and studies on hair restoration outcomes.",
//         "Clear explanations of how personalized coaching can address individual needs better than generic options.",
//       ],
//       socialProofPreferences: [
//         "Before and after photos from other clients.",
//         "Video testimonials from men with similar hair loss experiences.",
//       ],
//     },
//     solutionFit: {
//       productBenefits:
//         "Tailored strategies and expert advice that cater specifically to individual hair types and loss patterns, leading to better results.",
//       keyFeatures: [
//         "One-on-one consultations to analyze personal hair health.",
//         "Customized hair care regimens based on specific lifestyle factors.",
//         "Continuous support and progress tracking to adjust methods as needed.",
//       ],
//       messagingTone: "Friendly",
//     },
//     _id: "67eb67e3cec2d0879a54cf6c",
//     createdAt: "2025-04-01T04:13:23.978Z",
//     updatedAt: "2025-04-01T04:13:23.978Z",
//     __v: 0,
//   };

function Professional({persona}) {
  return (
     
          <Card className="rounded-sm w-full p-3">
            <h1 className="text-xl font-medium">Professional Details</h1>
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0">
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">Studied till {persona.educationLevel}</span>
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">{persona.jobTitle}</span>
                <span className="border-dashed border-[1px] border-slate-600 text-slate-200 rounded-sm p-2">works in {persona.industry}</span>
            </div>
          </Card>
  )
}

export default Professional