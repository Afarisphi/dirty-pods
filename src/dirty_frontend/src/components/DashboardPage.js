// DashboardPage.js

import { html, render } from 'lit-html';
import './styles/dashboard.css';
import profile from './profile.png';
import search from './search.png';

export const renderDashboardPage = (navigate) => {
  // Fungsi untuk mendapatkan waktu dan tanggal yang dinamis
  const getTimeAndDate = () => {
    const now = new Date();

    // Mengambil waktu dalam format jam:menit AM/PM
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const currentTime = timeFormatter.format(now);

    // Mengambil tanggal dalam format hari, bulan, tahun
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    });
    const currentDate = dateFormatter.format(now);

    return { currentTime, currentDate };
  };

  const { currentTime, currentDate } = getTimeAndDate();

  let body = html`
    <div class="dashboard-container">
      <header>
        <div class="user-info">
          <p>Welcome, Snowylulu</p>
          <p class="role">Dashboard</p>
        </div>
        <div class="profile-icon">
          <img src="${profile}" alt="Profile Icon">
        </div>
      </header>

      <div class="time-container">
        <h2>${currentTime}</h2>
        <p>${currentDate}</p>
      </div>

      <div class="search-container">
        <input type="text" placeholder="Start searching here...">
        <button><img src="${search}" alt="Search"></button>
      </div>

      <section class="ongoing-election">
        <h3>Ongoing Election</h3>
        <div class="sort">
          <button>Newest</button>
        </div>
        <div class="votes-container">
          <!-- Repeat this block for multiple votes -->
          <div class="vote-card">
            <p class="vote-title">[Title Vote]</p>
            <p class="vote-tags">#tag #tag #tag</p>
            <p class="vote-end">End: 27 Sept 2024, 10:29 PM</p>
            <button class="join-btn" id="join-btn1">Join Vote</button>
            <p class="voter-count">👥 78</p>
          </div>
          <!-- Repeat end -->
        </div>
      </section>
    </div>
  `;

  render(body, document.getElementById('root'));

  // Event Listener untuk tombol join vote
  document.getElementById('join-btn1').addEventListener('click', () => {
    console.log('Join Vote button clicked');
    navigate('/detailvote-page');
  });

  // Update waktu setiap detik
  setInterval(() => {
    const { currentTime, currentDate } = getTimeAndDate();
    document.querySelector('.time-container h2').textContent = currentTime;
    document.querySelector('.time-container p').textContent = currentDate;
  }, 1000); // Perbarui setiap 1 detik
};
