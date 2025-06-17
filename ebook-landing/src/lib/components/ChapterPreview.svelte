<script>
  const chapters = [
    {
      number: 1,
      title: "Navigating the Spanish Visa System",
      strapline: "Understanding Visas, Residency, and Taxes",
      excerpt:
        "Moving to Spain can be a daunting process, but with the right information, it can be a smooth and stress-free experience. This chapter will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
    {
      number: 2,
      title: "Finding your Dream Home in Spain",
      strapline: "Understanding Visas, Residency, and Taxes",
      excerpt:
        "Moving to Spain can be a daunting process, but with the right information, it can be a smooth and stress-free experience. This chapter will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
    {
      number: 3,
      title: "Navigating the Spanish Visa System",
      strapline: "Understanding Visas, Residency, and Taxes",
      excerpt:
        "Moving to Spain can be a daunting process, but with the right information, it can be a smooth and stress-free experience. This chapter will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
    {
      number: 4,
      title: "Navigating the Spanish Visa System",
      strapline: "Understanding Visas, Residency, and Taxes",
      excerpt:
        "Moving to Spain can be a daunting process, but with the right information, it can be a smooth and stress-free experience. This chapter will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
    {
      number: 5,
      title: "Navigating the Spanish Visa System",
      strapline: "Understanding Visas, Residency, and Taxes",
      excerpt:
        "Moving to Spain can be a daunting process, but with the right information, it can be a smooth and stress-free experience. This chapter will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
  ];

  let selectedChapterNumber = $state(1);
  let selectedChapter = $derived(
    chapters.find((chapter) => chapter.number === selectedChapterNumber),
  );

  function selectChapter(chapterNumber) {
    selectedChapterNumber = chapterNumber;
  }
</script>

<section class="chapter-preview default-margin">
  <h2 class="mb-l">What you're getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title={selectedChapterNumber ===
              chapter.number}
            aria-controls={`chapter-info-${chapter.number}`}
            aria-expanded={selectedChapterNumber === chapter.number}
            onclick={() => selectChapter(chapter.number)}
          >
            <h3>Chapter {chapter.number}: {chapter.title}</h3>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter.title}
      </h3>
      <p>
        {selectedChapter.excerpt}
      </p>
    </div>
  </div>
</section>

<style>
  .chapter-preview {
    padding: 80px;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
