const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    profileImage: "/images/doctors/priya_sharma.jpg",
    available: true,
    experience: 12,
    schedule: {
      monday: "9:00 - 12:00",
      wednesday: "14:00 - 17:00",
      friday: "10:00 - 13:00"
    },
    bio: "Senior cardiologist with 12 years experience in interventional procedures. Specializes in angioplasty and pacemaker implantation.",
    languages: ["English", "Hindi"],
    education: [
      "MD in Cardiology from AIIMS Delhi",
      "Fellowship in Interventional Cardiology from Johns Hopkins"
    ]
  },
  {
    name: "Dr. Rohan Patel",
    specialization: "Neurologist",
    profileImage: "/images/doctors/rohan_patel.jpg",
    available: true,
    experience: 9,
    schedule: {
      tuesday: "11:00 - 15:00",
      thursday: "13:00 - 17:00",
      saturday: "9:00 - 12:00"
    },
    bio: "Neurology specialist with expertise in epilepsy and Parkinson's disease management. Uses advanced neuroimaging techniques.",
    languages: ["English", "Gujarati"],
    education: [
      "DM in Neurology from NIMHANS Bangalore",
      "Fellowship in Movement Disorders from Cleveland Clinic"
    ]
  },
  {
    name: "Dr. Ananya Desai",
    specialization: "Pediatrician",
    profileImage: "/images/doctors/ananya_desai.jpg",
    available: false,
    experience: 7,
    schedule: {
      monday: "8:00 - 11:00",
      friday: "13:00 - 16:00"
    },
    bio: "Pediatric specialist focusing on neonatal care and childhood vaccinations. Special interest in pediatric nutrition.",
    languages: ["English", "Marathi"],
    education: [
      "MD in Pediatrics from KEM Hospital Mumbai",
      "Fellowship in Neonatology from Boston Children's Hospital"
    ]
  },
  {
    name: "Dr. Arjun Kapoor",
    specialization: "Orthopedic Surgeon",
    profileImage: "/images/doctors/arjun_kapoor.jpg",
    available: true,
    experience: 15,
    schedule: {
      tuesday: "8:00 - 12:00",
      thursday: "14:00 - 18:00",
      saturday: "9:00 - 13:00"
    },
    bio: "Orthopedic specialist with extensive experience in joint replacement surgeries and sports medicine. Former team doctor for national athletes.",
    languages: ["English", "Punjabi"],
    education: [
      "MS in Orthopedics from PGIMER Chandigarh",
      "Fellowship in Joint Replacement from Mayo Clinic"
    ]
  },
  {
    name: "Dr. Nandini Reddy",
    specialization: "Dermatologist",
    profileImage: "/images/doctors/nandini_reddy.jpg",
    available: true,
    experience: 8,
    schedule: {
      monday: "11:00 - 15:00",
      wednesday: "9:00 - 13:00",
      friday: "10:00 - 14:00"
    },
    bio: "Cosmetic dermatologist specializing in acne treatment, anti-aging therapies, and laser procedures. Focuses on evidence-based treatments.",
    languages: ["English", "Telugu"],
    education: [
      "MD in Dermatology from CMC Vellore",
      "Diploma in Aesthetic Medicine from London"
    ]
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);

    console.log(`🌱 Seeded ${doctors.length} doctors with local images`);
    console.log('📸 Image paths:');
    doctors.forEach(d => console.log(`- ${d.name}: ${d.profileImage}`));
    
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
}

seedDB();