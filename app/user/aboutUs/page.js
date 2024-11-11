// pages/about.js
"use client";
import React from 'react';
import Image from 'next/image';
import aboutImage from '/public/img/young-female.jpg'; // Replace with your actual image path
import styles from '../aboutUs/AboutUs.module.css'; // Corrected CSS module import

const Page = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['text-section']}>
        <h1 className={styles.heading}>About Us</h1>
        <h2 className={styles.subheading}>CareValue: Transforming Healthcare in Nigeria</h2>
        <p>
          Born amidst Lagos' vibrancy, Dr. Obi's journey from witnessing healthcare struggles in Nigeria to delivering advanced cardiovascular care in the United States ignited a mission. CareValue embodies this mission, aiming to uplift Nigerians through accessible, world-class healthcare.
        </p>
        <p>
          Our roots are deep in Nigeria's culture, but our standards soar at global heights. From telemedicine to specialized treatments, we bring international medical excellence right to your home, respecting local traditions along the way.
        </p>
        <p>
          Join us in revolutionizing Nigerian healthcare. With CareValue, exceptional care is not a privilege but a standard for every Nigerian. Start your healthier tomorrow with us today.
        </p>

        <h3 className={styles.missionHeading}>Our Mission: "Ilera Ni Wa" (Your Well-being is Our Priority)</h3>
        <p>
          At CareValue Health, we believe your well-being is paramount. That's why we put you at the heart of our mission. Our mission goes beyond simply providing healthcare. We strive to Empower, Heal, and Thrive alongside you. This commitment translates into three core pillars that guide everything we do:
        </p>
        <ul>
          <li>
            <strong>Patient-Centered Care:</strong> You are at the heart of our mission. We believe in accessible, top-tier medical care tailored to your unique needs and goals. We empower you to take control of your health through education, resources, and open communication.
          </li>
          <li>
            <strong>Seamless Connectivity:</strong> We bridge the gap between you and expert care. Through telemedicine and a robust network of healthcare professionals, we ensure you receive the right care, at the right time, no matter your location.
          </li>
          <li>
            <strong>Thriving Community:</strong> Your well-being is our priority. We foster a supportive community that provides encouragement, resources, and access to valuable healthcare information. Here, you'll find support on your journey to a healthier you.
          </li>
        </ul>
        <p>
          Our dedication goes beyond words. We actively work to connect individuals to expert care, bridge healthcare gaps, and build a healthier world, together, one empowered patient at a time.
        </p>

        <p>
          This is more than a website; it's an invitation to a healthier tomorrow. Let's start your journey today.
        </p>
        <button className={styles['cta-button']}>Schedule Your Free Consultation</button>
      </div>
      <div className={styles['image-section']}>
        <Image
          src={aboutImage}
          alt="CareValue Healthcare"
          layout="responsive"
          width={500}
          height={500}
          className={styles['round-image']}
        />
      </div>
    </div>
  );
};

export default Page;
