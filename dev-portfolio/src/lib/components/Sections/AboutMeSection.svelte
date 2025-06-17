<script lang="ts">
  import { SectionHeadline, Button, ExperienceTable } from "$components";
  import image from "$assets/about-me.jpeg";
  import { goto } from "$app/navigation";

  interface AboutMeSectionProps {
    workExperiences: SanityWorkExperience[];
  }

  let { workExperiences }: AboutMeSectionProps = $props();

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">About me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        I'm a software engineer with a passion for building web applications
        that are both functional and aesthetically pleasing.
      </p>
      <p>
        I'm a software engineer with a passion for building web applications
        that are both functional and aesthetically pleasing.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable {workExperiences} />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
