import React from 'react';

const App = () => {
  return (


<>
    <h1>Google Map</h1>

    <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.298468220682!2d74.33870837472615!3d31.51596144736143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.%20Tower!5e0!3m2!1sen!2s!4v1748197345015!5m2!1sen!2s"
        width="800"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        ></iframe>
    </div>
        </>
  );
};

export default App;
