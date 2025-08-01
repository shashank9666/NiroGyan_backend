const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Book appointment
router.post('/', async (req, res) => {
  const { doctorId, patientName, appointmentDate, timeSlot, reason } = req.body;

  try {
    // Check doctor availability
    const doctor = await Doctor.findById(doctorId);
    if (!doctor || !doctor.available) {
      return res.status(400).json({ message: 'Doctor not available' });
    }

    const newAppointment = new Appointment({
      doctorId,
      patientName,
      appointmentDate,
      timeSlot,
      reason
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctorId');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;