<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello! I'm Yap</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a software engineer</h1>
  <Button {onclick}>Let's talk</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
