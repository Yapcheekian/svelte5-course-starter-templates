<script lang="ts">
  import {
    HeroSection,
    AboutMeSection,
    MyWorkSection,
    SkillsSection,
    ContactSection,
  } from "$components";

  const { data } = $props();
  const { workExperiences, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperiences} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
