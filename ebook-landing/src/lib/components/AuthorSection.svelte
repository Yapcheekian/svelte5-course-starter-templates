<script>
  import authorPic from "$assets/profile_pic.jpg";
</script>

<section class="author-section">
  <h2 class="mb-l">About the Author</h2>
  <div class="author-container">
    <div class="author-text">
      <p>
        Yap is a seasoned expatriate who has lived in Spain for over seven
        years. He has made every mistake in the book and wants to share his
        knowledge with you to help you avoid the same mistakes.
      </p>
      <p>
        Yap's practical advice is rooted in his own experiences and the
        experiences of other expatriates he has met. He has a passion for
        helping others avoid the same mistakes he made.
      </p>
    </div>
    <img src={authorPic} alt="Yap" />
  </div>
</section>

<style>
  .author-section {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
