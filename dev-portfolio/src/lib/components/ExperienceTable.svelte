<script lang="ts">

  interface AboutMeSectionProps {
    workExperiences: SanityWorkExperience[];
  }

  let { workExperiences }: AboutMeSectionProps = $props();
</script>

<section class="default-margin work-experience mt-m">
  <ul class="work-experience-list">
    {#each workExperiences as job}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
          <div class="company-and-date">
            <p>{job.company}</p>
            <p class="dark-grey">
              {job.startDate}
              {#if job.endDate}
                / {job.endDate}
              {:else}
                / Present
              {/if}
            </p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
  <h2 class="headline">Past Work <br />Experience</h2>
</section>

<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
  }
</style>
