<template>
  <div class="about">
    <h2>Exerp Weather</h2>
    <p>
      Welcome to the most accurate and user-friendly weather forecasting app!
      Whether you're planning a trip or just curious about the weather, we
      provide real-time data to keep you informed.
    </p>

    <div class="current-weather">
      <h3>What do we provide?</h3>
      <ul>
        <li>
          <strong>Temperature:</strong> The current temperature at your
          location.
        </li>
        <li><strong>Wind Speed:</strong> Real-time wind speed updates.</li>
        <li>
          <strong>Wind Direction:</strong> Wind direction for better weather
          insights.
        </li>
        <li>
          <strong>Weather Condition:</strong> Real-time weather updates (e.g.,
          Clear Sky, Rain, etc.).
        </li>
      </ul>
    </div>

    <div class="additional-info">
      <h3>Why Choose Us?</h3>
      <p>
        Our app pulls data from reliable sources to ensure the accuracy and
        timeliness of every forecast. Stay updated with the best weather
        information!
      </p>
    </div>

    <div class="footer">
      <p>Created with ❤️ by Ebin</p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.about {
  padding: 80px;
  background-color: #e3eaf2;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 20px auto;
  font-family: "Roboto", sans-serif;
  color: #333;
}

h2 {
  font-size: 26px;
  color: #4682b4;
  text-align: center;
  margin-bottom: 20px;
}

h3 {
  color: #555;
}

p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.current-weather {
  margin-top: 20px;
}

.current-weather ul {
  list-style-type: none;
  padding-left: 0;
}

.current-weather li {
  font-size: 16px;
  color: #555;
  margin-bottom: 12px;
}

.current-weather strong {
  color: #4682b4;
}

.additional-info {
  margin-top: 20px;
}

.additional-info p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.footer {
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
  color: #777;
}

.footer p {
  margin: 5px 0;
}

@media (max-width: 600px) {
  .about {
    padding: 20px;
  }

  h2 {
    font-size: 22px;
  }

  p,
  .current-weather li {
    font-size: 14px;
  }
}
</style>
