import React from 'react';
import '../Css/Attendance.css'
import '../Css/ScrollAnimation.css';
import ScrollAnimation from '../Components/ScrollAnimation ';

const AttendancePage = () => {

  const { ref, isVisible } = ScrollAnimation();

  return (
    <div className="attendance-container">

      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
        <div className="vertical-about"></div>
      <h2 className="attendance-title">Attendance</h2>

      </div>

      <section className="attendance-section history-section">
        <h3 className="section-title">Attendance History</h3>
        <p className="section-description">View detailed records of your attendance.</p>
        <div className="button-group">
          <button className="action-button">Filter by Date Range</button>
          <button className="action-button">Export CSV</button>
          <button className="action-button">Export PDF</button>
        </div>
      </section>

      <section className="attendance-section summary-section">
        <h3 className="section-title">Attendance Summary</h3>
        <p className="summary-detail">Attendance Percentage: 95%</p>
        <p className="summary-detail">Days Present: 28</p>
        <p className="summary-detail">Days Absent: 2</p>
        <div className="chart-placeholder">[Chart Representation]</div>
      </section>

      <section className="attendance-section ussd-section">
        <h3 className="section-title">How to Mark Attendance via USSD</h3>
        <p className="section-description">Dial the following code: <strong>*123*456#</strong></p>
        <p className="section-description">Follow the prompts to mark your attendance.</p>
        <div className="button-group">
          <button className="action-button">FAQ</button>
          <button className="action-button">Troubleshooting Tips</button>
        </div>
      </section>

      <section className="attendance-section notifications-section">
        <h3 className="section-title">Notifications</h3>
        <p className="notification">You have missed marking attendance on [Date].</p>
        <p className="notification">Reminder: Mark your attendance by 9 AM every day.</p>
      </section>

      <section className="attendance-section policies-section">
        <h3 className="section-title">Attendance Policies</h3>
        <p className="section-description"><a href="#policies">Link to Detailed Policies</a></p>
        <p className="section-description"><a href="#rules">Rules and Regulations</a></p>
        <p className="section-description"><a href="#penalties">Penalties and Excused Absences Procedures</a></p>
      </section>

      <section className="attendance-section support-section">
        <h3 className="section-title">Contact Support</h3>
        <p className="section-description">Need help? <a href="#contact-form">Contact Form</a></p>
        <p className="section-description">Support Hotline: <a href="tel:123-456-7890">123-456-7890</a></p>
        <p className="section-description"><a href="#live-chat">Live Chat</a></p>
      </section>
    </div>
  );
};

export default AttendancePage;
