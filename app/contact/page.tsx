'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const BookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  /**
   * BUSINESS OWNER AVAILABILITY
   * This can later come from a database or API
   */
  const businessAvailability = {
    daysOfWeek: [5, 6, 0], // Friday (5), Saturday (6), Sunday (0)
    startTime: '09:00',
    endTime: '21:00',
  };

  /**
   * When user selects a time slot
   */
  const handleSelect = (info) => {
    setSelectedSlot(info);
    setShowModal(true);
  };

  /**
   * Submit booking
   */
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      start: selectedSlot.startStr,
      end: selectedSlot.endStr,
      email: customerEmail,
      phone: customerPhone,
      address: customerAddress,
    };

    console.log('Booking:', bookingData);

    // TODO:
    // - Save to database
    // - Send confirmation email
    // - Notify business owner

    setShowModal(false);
    setCustomerEmail('');
    setCustomerPhone('');
    setCustomerAddress('');
  };

  return (
    <div style={{ padding: '20px' }}>

      {/* Calendar Container */}
      <div style={{ maxWidth: '900px', height: '500px', margin: '0 auto' }}>
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          selectable
          select={handleSelect}
          height="100%"
          allDaySlot={false}
          slotMinTime="09:00:00"
          slotDuration="01:00:00"
          slotMaxTime="21:00:00"
          hiddenDays={[1, 2, 3, 4]} // Hide Mon–Thu
          businessHours={[
            {
              daysOfWeek: businessAvailability.daysOfWeek,
              startTime: businessAvailability.startTime,
              endTime: businessAvailability.endTime,
            },
          ]}
        />
      </div>

      {/* MODAL */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Complete Your Booking</h2>

            <p>
              <strong>Selected Time:</strong><br />
              {selectedSlot.start.toLocaleString()}
            </p>

            <form onSubmit={handleBookingSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                required
              />

              <div style={{ marginTop: '15px' }}>
                <button type="submit">Confirm Booking</button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Simple Modal Styles
 */
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px',
  boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
};

export default BookingPage;
