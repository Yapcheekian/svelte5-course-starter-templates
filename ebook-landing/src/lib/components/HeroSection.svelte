<script>
  import bookCover from "$assets/book_cover.png";
  import phoneCover from "$assets/phone_cover.png";
  import { Button } from "$components";

  let { children } = $props();
</script>

<section class="hero">
  <div class="hero-showcase text-center bold">
    <h1 class="purple">MOVE TO</h1>
    <h1 class="purple mb-xs">SPAIN</h1>
    <h4 class="italic semi-bold">
      There's no need to make the same mistakes I did
    </h4>
    <img class="book-cover" src={bookCover} alt="" />
    <img class="phone-cover" src={phoneCover} alt="" />
  </div>
  <div class="hero-text white text-center">
    {#if children}
      {@render children()}
    {:else}
      <h1>THIS EBOOK WILL</h1>
      <h1>SAVE YOU MONEY</h1>
      <h1 class="mb-m">TIME & NERVES</h1>
      <p class="light-grey">
        I moved to Spain seven years ago and made every mistake in the book.
      </p>
      <Button>Purchase the E-book for $10</Button>
    {/if}
  </div>
</section>

<style>
  .hero {
    display: flex;
    /* height: 100vh; */
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    width: 35%;
    bottom: 0;
    right: 52%;
    transform: translateY(25%);
  }
</style>
