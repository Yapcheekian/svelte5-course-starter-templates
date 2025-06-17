<script lang="ts">
  import heroImage from "$assets/hero.png";
  import { Button } from "$components";
</script>

<section class="default-margin hero">
  <div class="hero-text">
    <h1>Book Nest</h1>
    <h3>Your personal book library.</h3>
    <h4 class="mt-l">
      Create your own book library and share it with your friends.
    </h4>
    <h4 class="mb-s">
      Our app offers a wide range of books to choose from, and you can add your
      own
    </h4>
    <Button href="/register">Sign Up</Button>
  </div>
  <img class="hero-image" src={heroImage} alt="" />
</section>

<style>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 80px;
  }

  .hero-image {
    width: 40%;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 55%;
    padding-right: 50px;
  }
</style>
