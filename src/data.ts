export const SIX_MONTH_COURSES = [
  {
    id: 'canine-obedience', title: 'Canine Obedience Training', fee: 1500,
    duration: '6 months · 12 weeks', tag: 'Professional Development',
    purpose: 'To teach effective dog obedience and behavioural training techniques.',
    topics: ['Basic commands', 'Leash training', 'Behaviour correction', 'Positive reinforcement', 'Socialisation techniques'],
    image: 'https://images.unsplash.com/photo-1596278852720-141ba859bbbf?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Trainer working with a dog outdoors',
  },
  {
    id: 'pet-grooming', title: 'Pet Grooming', fee: 1500,
    duration: '6 months · 12 weeks', tag: 'Professional Development',
    purpose: 'To provide professional grooming skills for domestic pets.',
    topics: ['Coat care', 'Bathing techniques', 'Nail trimming', 'Ear and eye cleaning', 'Grooming equipment'],
    image: 'https://images.unsplash.com/photo-1611173622933-91942d394b04?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Dog being professionally groomed',
  },
  {
    id: 'animal-behaviour', title: 'Animal Behaviour', fee: 1500,
    duration: '6 months · 12 weeks', tag: 'Professional Development',
    purpose: 'To understand common pet behaviours and improve communication with animals.',
    topics: ['Animal psychology', 'Reading body language', 'Stress management', 'Behaviour modification', 'Enrichment activities'],
    image: 'https://images.unsplash.com/photo-1683444066011-bb456c79d79d?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Dog sitting calmly during a session',
  },
  {
    id: 'pet-business', title: 'Pet Business Management', fee: 1500,
    duration: '6 months · 12 weeks', tag: 'Professional Development',
    purpose: 'To prepare learners to operate a successful pet-related business.',
    topics: ['Customer service', 'Marketing', 'Business planning', 'Financial management', 'Legal requirements'],
    image: 'https://images.unsplash.com/photo-1620289052446-202137ffa876?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Professional working with dog in field',
  },
]

export const SIX_WEEK_COURSES = [
  {
    id: 'puppy-care', title: 'Puppy Care', fee: 750,
    duration: '6 weeks', tag: 'Practical Skills',
    purpose: 'To provide new puppy owners with essential care knowledge.',
    topics: ['Feeding', 'Vaccinations', 'Toilet training', 'Exercise', 'Socialisation'],
    image: 'https://images.unsplash.com/photo-1640652663796-764e4eb5bc59?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Person training a young puppy',
  },
  {
    id: 'pet-first-aid', title: 'Pet First Aid', fee: 750,
    duration: '6 weeks', tag: 'Practical Skills',
    purpose: 'To provide emergency first aid knowledge for pets.',
    topics: ['Minor injuries', 'CPR basics', 'Poison awareness', 'Heatstroke', 'Emergency transport'],
    image: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Careful handling of a dog',
  },
  {
    id: 'dog-walking', title: 'Basic Dog Walking', fee: 750,
    duration: '6 weeks', tag: 'Practical Skills',
    purpose: 'To teach safe and professional dog walking practices.',
    topics: ['Walking equipment', 'Handling multiple dogs', 'Safety procedures', 'Exercise routines'],
    image: 'https://images.unsplash.com/photo-1723874959019-8d4a214cbf6d?w=600&h=380&fit=crop&auto=format',
    imageAlt: 'Small dog standing during training',
  },
]

export const ALL_COURSES = [...SIX_MONTH_COURSES, ...SIX_WEEK_COURSES]

export function formatZAR(n: number) { return `R${n.toLocaleString('en-ZA')}` }
export function getDiscount(n: number) {
  if (n >= 4) return 0.15; if (n === 3) return 0.10; if (n === 2) return 0.05; return 0
}

export const TESTIMONIALS = [
  { name: 'Nomsa Dlamini', role: 'Pet Owner', course: 'Canine Obedience Training', avatar: '👩🏾', stars: 5, quote: 'My dog Max was completely unmanageable before this course. After 12 weeks, he walks calmly on a leash and responds to every command. Life-changing!' },
  { name: 'Thabo Molefe', role: 'Professional Dog Walker', course: 'Basic Dog Walking + Pet First Aid', avatar: '👨🏿', stars: 5, quote: 'The combination of Dog Walking and First Aid gave me the confidence to run my own business. I now walk 15 dogs a week for clients across Durban.' },
  { name: 'Priya Naidoo', role: 'Grooming Salon Owner', course: 'Pet Grooming', avatar: '👩🏽', stars: 5, quote: 'The grooming programme was incredibly hands-on. Within six months I had the skills and Sarah helped me understand the business side too. My salon opened six months after graduating.' },
  { name: 'Lungelo Zulu', role: 'Kennel Staff', course: 'Animal Behaviour', avatar: '👨🏾', stars: 5, quote: 'Understanding animal body language has made me so much more effective at the kennel. I can identify stress early and prevent incidents before they happen.' },
  { name: 'Ayanda Khumalo', role: 'Aspiring Vet Assistant', course: 'Puppy Care + Pet First Aid', avatar: '👩🏿', stars: 5, quote: 'The Pet First Aid course gave me practical emergency skills I use every day. The instructors are passionate and the content is really applicable to real situations.' },
  { name: 'Sipho Shabalala', role: 'Pet Business Owner', course: 'Pet Business Management', avatar: '👨🏽', stars: 5, quote: 'From zero business knowledge to running a registered pet care company — the business management course covered everything I needed to launch successfully.' },
]

export const FAQS = [
  { q: 'Do I need prior experience to enrol?', a: 'No experience is required for any of our courses. Our programmes are designed to welcome complete beginners as well as those looking to formalise existing knowledge.' },
  { q: 'When do courses start?', a: 'We run intake cycles quarterly. Contact us to find out the next available start date for your chosen programme.' },
  { q: 'Are the courses accredited?', a: 'Our Professional Development Programmes are industry-recognised. We are in the process of obtaining formal SETA accreditation. Certificates of completion are issued for all courses.' },
  { q: 'Can I do more than one course at a time?', a: 'Yes — and you\'ll receive a multi-course discount automatically. Two courses earn 5% off, three earn 10% off, and four or more earn 15% off.' },
  { q: 'Is there a payment plan available?', a: 'Yes, we offer flexible payment arrangements. Please contact us directly to discuss options that work for your budget.' },
  { q: 'Are courses in-person or online?', a: 'All courses are conducted in-person in Durban, KwaZulu-Natal. Practical skills require hands-on training with animals, which cannot be replicated online.' },
  { q: 'What happens if I miss a session?', a: 'We understand life happens. Missed sessions can be made up in the following week where class capacity allows. Speak to your instructor in advance if possible.' },
  { q: 'Do you offer corporate or group training?', a: 'Yes, we offer tailored group packages for kennels, veterinary practices, and pet businesses. Contact us for a custom quote.' },
]